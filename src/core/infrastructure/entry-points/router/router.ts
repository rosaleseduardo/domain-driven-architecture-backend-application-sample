import { Router as ExpressRouter } from 'express';

import { Router as UsersRouter } from '@entities/users/infrastructure';

const Router = ExpressRouter();

Router.use('/users', UsersRouter);

export default Router;
