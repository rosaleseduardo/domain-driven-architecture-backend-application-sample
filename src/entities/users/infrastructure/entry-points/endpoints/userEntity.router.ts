import { Router } from 'express';

import { Contollers } from '../../implementations';

const ROUTER = Router();

ROUTER.get('/', (_req, res) => {
  res.json({ message: 'Obteniendo el recurso de usuarios' });
});
ROUTER.post('/', Contollers.create);
ROUTER.put('/', (_req, res) => {
  res.json({ message: 'Modificando el recurso de usuarios' });
});
ROUTER.delete('/', (_req, res) => {
  res.json({ messaje: 'Eliminando un nuevo recurso de usuarios' });
});

export default ROUTER;
