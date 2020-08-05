import express from "express";

import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionController";

const classesController = new ClassesController();
const connectionController = new ConnectionsController();

const routes = express.Router();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

routes.get("/connections", connectionController.index);
routes.post("/connections", connectionController.create);

export default routes;
