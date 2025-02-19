import express from 'express';
import productsRouter from './products.js';
import depositsRouter from './deposits.js';
import usersRouter from './users.js';
import clientsRouter from './clients.js';
import providersRouter from './providers.js';
import purchasesRouter from './purchases.js';
import salesRouter from './sales.js';

function apiRouter(app) {
  const router = express.Router();
  // Base URL
  app.use('/api/v1', router);
  // Call every router here
  router.use('/products', productsRouter);
  router.use('/deposits', depositsRouter);
  router.use('/users', usersRouter);
  router.use('/clients', clientsRouter);
  router.use('/providers', providersRouter);
  router.use('/purchases', purchasesRouter);
  router.use('/sales', salesRouter);
}

export default apiRouter;
