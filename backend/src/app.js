const express = require('express');
const cors = require('cors');

const routes = require('./routes');

//habilita o uso das variaveis de ambiente do arquivo .env
require('dotenv-safe').config()

//const path = require('path');

const app = express();
const port = 6767;

app.use(cors());
// app utilizando body-parser para receber informações do form
app.use(express.urlencoded({
    extended:false
}));
// App esta utilizando express e a estrutura de dados json
app.use(express.json());

// Arquivos estatico, utilizados apenas se a aplicação precisar rodar no server
/*app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
})
app.get('/cadastrarONGS', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','cadastrarONGS.html'));
})*/
// App utilizando rotas 
app.use(routes);


// Subindo o server
app.listen(port,()=>{
    console.log('Server is up on '+ port +' port');
});