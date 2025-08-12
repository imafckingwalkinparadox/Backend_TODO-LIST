require('dotenv').config();
const express = require('express');

const app = express();

const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

//Configuracion del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})
