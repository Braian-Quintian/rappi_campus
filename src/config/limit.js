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
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export let limitRepartidoresPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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
        max: 10,
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
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })  
}

export const limitClientesPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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
        max: 10,
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
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitRestaurantePOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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
        max: 10,
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

export const limitEmpleadosGET = ()=> {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitEmpleadosPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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

export const limitEmpleadosPUT = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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

export const limitProductosGET = ()=> {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitProductosPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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

export const limitProductosPUT = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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

export const limitPedidosGET = ()=> {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitPedidosPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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

export const limitPedidosPUT = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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

export const limitDetallesGET = ()=> {
    return rateLimit({
        windowMs: 30 * 1000,
        max: 10,
        standardHeaders: true, 
        legacyHeaders: false, 
        message: (req,res)=>{res.status(429).send({message: "Limite alcanzado"});
        }
    })
}

export const limitDetallesPOST = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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

export const limitDetallesPUT = ()=> {
    return rateLimit({
        windowMs: 60 * 1000,
        max: 10,
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