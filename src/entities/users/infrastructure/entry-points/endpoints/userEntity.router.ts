import { Router as ExpressRouter } from 'express';

import { Contollers } from '../../implementations';

const Router = ExpressRouter();

Router.get('/', (_req, res) => {
  res.json({ message: 'Obteniendo el recurso de usuarios' });
});
Router.post('/', Contollers.create);
Router.put('/', (_req, res) => {
  res.json({ message: 'Modificando el recurso de usuarios' });
});
Router.delete('/', (_req, res) => {
  res.json({ messaje: 'Eliminando un nuevo recurso de usuarios' });
});

export default Router;
