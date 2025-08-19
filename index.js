require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

//CORS

app.use(cors());

const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);

//Configuracion del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})
