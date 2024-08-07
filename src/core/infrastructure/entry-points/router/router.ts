import { Router as ExpressRouter } from 'express';

import { Endpoints } from '@entities/users/infrastructure';

const Router = ExpressRouter();

Router.use('/users', Endpoints);

export default Router;
