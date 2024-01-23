const express = require('express');

class Server {

    constructor() {
        this.restserver = express();

        this.middlewares();


        this.routes();
    }

    middlewares(){
        // Directorio público
        this.restserver.use(express.static('public'));
    }



    routes() {
        this.restserver.get('/api', (req, res) => {
            res.status(403).json({
                msg: 'get API'
            });
        });
    }

    listen(){
        this.restserver.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }
}

module.exports = Server;