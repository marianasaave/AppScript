let googleSheet = require('../spreadsheet');


const obtenerVideos= async (req, res) => {
  registros = await googleSheet.accederGoogleSheet();
  res.render('index', {registros});
}

const renderForm =  (req, res) => {
  res.render('form', {});

}

const guardarNombre = (req, res) =>{
  googleSheet.guardarNombre(req.body);
  res.redirect('/');
}

module.exports ={
    obtenerVideos: obtenerVideos,
    renderForm:renderForm,
    guardarNombre:guardarNombre
}