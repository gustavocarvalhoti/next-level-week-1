import express from 'express';
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const pointsController = new PointsController();
const itemsController = new ItemsController();

// Declarando fora do arquivo principal
const routes = express.Router();

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// Convenção
// index    = listagem
// show     = unico registro
// create
// update
// delete

export default routes;
