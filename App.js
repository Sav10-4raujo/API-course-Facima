const express = require ('express');
const bodyParser = require ('body-parser');
const dataBase = require ('./config/dataBase');
const booksRoutes = require('./src/routes/books');
const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use('/', booksRoutes);

dataBase.connect()
    .then(() => app.listen(port,()=>console.log(`App is runnig on port: ${port}`)))
    .catch(err =>{
        console.error(err);
        process.exit(1);
    })
