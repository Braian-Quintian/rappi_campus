import rateLimit from "express-rate-limit";

export let limitLogin = ()=>{
    return rateLimit({
        windowMs: 1 * 60 * 1000,
        max: 3,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{if(req.headers["content-length"]>100){res.status(413).send({message: "Tamaño de la solicitud alcanzado"});
                return true;
            }
        }, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })    
}
export let limitRepartidores = ()=>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}