const { response, request } = require('express');

const Usuario = require('../models/usuario');





const usuariosGet = async(req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

//POST
const usuariosPost = async(req, res = response) => {
    const body = req.body;
    const usuario = new Usuario( body );

    // Guardar en BD
    await usuario.save();

    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}
//PUT
const usuariosPut = (req, res = response) => {
    const { id } = req.params;

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