const {GoogleSpreadsheet} = require('google-spreadsheet');

const credenciales = require('./json/credenciales.json');

let googleId ="1M9F2YAor2_biz6dzT1odmayrJND2lQgoeCyGeVP87qM";

async function accederGoogleSheet(){
    console.log("si entro");
    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();

    const sheet = documento.sheetsByIndex[0];
    const registros = await sheet.getRows();

    return registros;
 
    
}

async function guardarNombre(pObjeto){

    const documento = new GoogleSpreadsheet(googleId);
    await documento.useServiceAccountAuth(credenciales);
    await documento.loadInfo();
    

    const sheet = documento.sheetsById[0];

    await sheet.addRow(pObjeto);
    //console.log(pObjeto)
}


module.exports = {
    accederGoogleSheet:accederGoogleSheet,
    guardarNombre:guardarNombre,
}