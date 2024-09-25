import express from 'express';
import productRoutes from './src/routes/productRoutes.js';

class Server {
    constructor() {
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use('/api', productRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor rodando na porta ${this.port}`);
        });
    }
}

const server = new Server();
server.listen();

export default server;
