const {Router} =require('express');
const router = Router();

const {
    obtenerVideos,
    renderForm,
    guardarNombre,
} = require('../controllers/google.controller.js');

router.get('/', obtenerVideos);
router.get('/form', renderForm);
router.post('/form', guardarNombre);




module.exports = router;