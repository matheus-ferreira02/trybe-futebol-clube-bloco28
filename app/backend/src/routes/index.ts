import * as express from 'express';
import loginRoutes from './login';
// import LoginRoutes from './login';
// import factory from '../factory/routes';

// class Routes {
//   public routes: express.IRouter;

//   constructor(private login: LoginRoutes) {
//     this.routes = express.Router();
//   }

//   public main() {
//     console.log('chegou main');
//     console.dir(this);

//     this.routes.get('/login', (req: express.Request, res: express.Response) => {
//       console.log('enrou');

//       res.status(200).send('foi');
//     });
//   }
// }

// const routes = new Routes(factory.loginRoutes());

const routes = express.Router();

routes.use('/login', loginRoutes);

export default routes;
