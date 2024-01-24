const { response, request } = require('express');

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
const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
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