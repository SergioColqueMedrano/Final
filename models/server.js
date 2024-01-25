const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        this.authPath     = '/api/auth';

        // conectar a base de datos
        this.conectarDB();

        this.middlewares();


        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares(){
        
        this.app.use( cors());

        //Lectura y parseo del body
        this.app.use( express.json());

        // Directorio público
        this.app.use(express.static('public'));
    }



    routes() {
        this.app.use( this.authPath, require('../routes/auth'));
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }
}

module.exports = Server;