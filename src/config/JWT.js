import { SignJWT, jwtVerify } from "jose"
import { connect } from "../connection/connection.js"
import conexion from '../connection/credentials.js';
import { ObjectId } from "mongodb"
import bcrypt from 'bcrypt';

const db = await connect();

const createToken = async (req, res, next) => {
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).send({ message: "Datos no enviados" });
        }
        const acceptVersion = req.headers["accept-version"];
        if (!acceptVersion) {
            return res.status(422).send({ message: "No se define la version del api" });
        }
        // Determinar la colección en función de la versión
        let collectionEntry;
        switch (acceptVersion) {
            case "1.0.0":
                collectionEntry = "clientes";
                break;
            case "2.0.0":
                collectionEntry = "repartidores";
                break;
            case "3.0.0":
                collectionEntry = "empleados";
                break;
            case "4.0.0":
                collectionEntry = "restaurantes";
                break;
            default:
                return res.status(422).send({ message: "Version del api incorrecta" });
        }
        // Buscar el usuario en la colección correspondiente
        const result = await db.collection(collectionEntry).findOne({ [`${collectionEntry.substring(0, 3)}_email`]: req.body.correo });
        if (!result) {
            return res.status(403).send({ message: "Usuario no encontrado" });
        }
        const storedPassword = result[`${collectionEntry.substring(0, 3)}_password`];
        const providedPassword = req.body.contraseña;
        const passwordMatch = await bcrypt.compare(providedPassword, storedPassword);
        if (!passwordMatch) {
            return res.status(401).send({ message: "Contraseña incorrecta" });
        }
        // Generar el token JWT
        const encoder = new TextEncoder();
        const id = result._id.toString();
        const jwtConstructor = await new SignJWT({ id: id })
            .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
            .setIssuedAt()
            .setExpirationTime('3h')
            .sign(encoder.encode(conexion.token));

        req.data = { status: 200, message: jwtConstructor };
        next();
    } catch (error) {
        return res.status(401).send({ message: "Acceso no autorizado" });
    }
};

const validarToken = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(token, encoder.encode(conexion.token));
        // Determinar la colección en función del endpoint
        const collection = req.baseUrl.substring(1);
        // Buscar los permisos del usuario en la colección correspondiente
        const userPermissions = await db.collection(`${collection}`).findOne({
            _id: new ObjectId(jwtData.payload.id),
            [`${collection.substring(0, 3)}_permisos.${req.baseUrl}`]: { $exists: true }
        });
        // Verificar los permisos del usuario
        const requiredPermissions = userPermissions[`${collection.substring(0, 3)}_permisos`][req.baseUrl];
        if (requiredPermissions.includes('*') || requiredPermissions.includes(req.headers["accept-version"])) {
            const { _id, permisos, ...usuario } = userPermissions;
            return usuario;
        } else {
            throw new Error("El usuario no tiene los permisos necesarios");
        }
    } catch (error) {
        console.error("Error:", error.message);
        return false; // Devolver false en caso de error
    }
}

export {
    createToken,
    validarToken
}
