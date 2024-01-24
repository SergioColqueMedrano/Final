const { Router } = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch, } = require('../controllers/usuarios');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet)

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('password', 'El password debe ser de más de 6 letras').isLength({ min: 6 }),
    //check('rol', 'No es rol valido'),isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], usuariosPost)

router.put('/:id', usuariosPut)

router.patch('/', usuariosPatch)

router.delete('/', usuariosDelete)

module.exports = router;