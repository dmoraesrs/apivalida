import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
 constructor() {
   this.server = express();

   this.middlewares();
   this.routes();
 }

 middlewares() {
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }

   this.server.use(cors(corsOptions));
   this.server.use(express.json());
 }

 routes() {
   this.server.use(routes);
 }
}

export default new App().server;

