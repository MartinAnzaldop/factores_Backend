const express = require('express');
const cors = require('cors');
const app=express();
const conectarDB=require('./config/db')

//conectar a la base de datos
conectarDB()
app.use(cors());
app.use(express.json()); 

app.listen(4000, ()=>{
    console.log('El servidor 4000 esta corriendo')
})
