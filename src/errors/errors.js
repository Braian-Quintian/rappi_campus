// Función para manejar errores internos del servidor (Error 500)
function handleInternalServerError(err, res) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
}

// Función para manejar errores de entrada duplicada (Error 400)
function handleDuplicateEntryError(res, item) {
    res.status(400).json({ message: `Error creating ${item}. The ${item} already exists. Please provide a unique name for the ${item}.` });
}

// Función para manejar errores de datos inválidos (Error 400)
function handleInvalidDataError(res, message) {
    const errorMessage = 'Invalid data error: ' + message; // Agrega un prefijo al mensaje de error
    res.status(400).json({ message: errorMessage });
}

// Función para manejar errores de elemento no existente (Error 400)
function handleNonExistentError(res, item) {
    res.status(400).json({ message: `Error creating ${item}. The ${item} does not exist.` });
}

export {
    handleInternalServerError,
    handleDuplicateEntryError,
    handleInvalidDataError,
    handleNonExistentError
};