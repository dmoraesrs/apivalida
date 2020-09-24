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
   this.server.use(cors({
     origin: 'http://20.190.250.167',
   }));
   this.server.use(express.json());
 }

 routes() {
   this.server.use(routes);
 }
}

export default new App().server;

