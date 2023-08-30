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
export let limitRepartidoresGET = ()=>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export let limitRepartidoresPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 3,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{if(req.headers["content-length"]>1000){res.status(413).send({message: "Tamaño de la solicitud alcanzado"});
                return true;
            }
        }, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })      
}

export const limitRepartidoresPUT = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 1,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{if(req.headers["content-length"]>1000){res.status(413).send({message: "Tamaño de la solicitud alcanzado"});
                return true;
            }
        }, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitClientesGET = ()=> {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })  
}

export const limitClientesPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 1,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{if(req.headers["content-length"]>1000){res.status(413).send({message: "Tamaño de la solicitud alcanzado"});
                return true;
            }
        }, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitClientesPUT = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 1,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{if(req.headers["content-length"]>1000){res.status(413).send({message: "Tamaño de la solicitud alcanzado"});
                return true;
            }
        }, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitRestauranteGET = ()=> {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitRestaurantePOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 1,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{if(req.headers["content-length"]>1000){res.status(413).send({message: "Tamaño de la solicitud alcanzado"});
                return true;
            }
        }, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitRestaurantePUT = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 1,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{if(req.headers["content-length"]>1000){res.status(413).send({message: "Tamaño de la solicitud alcanzado"});
                return true;
            }
        }, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}