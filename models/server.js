const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.restserver = express();
        
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();


        this.routes();
    }

    middlewares(){
        
        this.restserver.use( cors());

        //Lectura y parseo del body
        this.restserver.use( express.json());

        // Directorio público
        this.restserver.use(express.static('public'));
    }



    routes() {
        this.restserver.use( this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.restserver.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }
}

module.exports = Server;