const { response, request } = require('express');

const usuariosGet = async(req = request, res = response) => {

    
    res.json({
        ok: true,
        msg: 'get API - controlador',
    });
}

//POST
const usuariosPost = (req, res = response) => {
    const body = req.body;

    res.json({
        ok: true,
        msg: 'post API - controlador',
        body
    });
}
//PUT
const usuariosPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - controlador',
        id
    });
}

//PATCH
const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    });
}

//DELETE
const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - controlador'
    });
}

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}