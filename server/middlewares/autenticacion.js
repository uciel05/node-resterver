const jwt = require('jsonwebtoken');
//Verificar Token

let verificarToken = (req, res, next) => {
    let token = req.get('authorization');
    
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err){
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
}

//Verificar Admin_Role

let verificarAdmin_rol = (req, res, next) => {
    let usuario = req.usuario;

    if(usuario.rol === 'ADMIN_ROL'){
        next();
    }else{
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }    
}



module.exports = {
    verificarToken,
    verificarAdmin_rol
}