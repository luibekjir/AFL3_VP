import { Router } from "express";
import { OrderController } from "../controllers/order-controller";
const orderRouter = Router();

orderRouter.post("/", OrderController.create);
orderRouter.get("/", OrderController.getAll);
orderRouter.get("/customer/:id", OrderController.getByCustomer);
orderRouter.get("/restaurant/:id", OrderController.getByRestaurant);
orderRouter.get("/time/ordered", OrderController.getOrderTimes);
orderRouter.get("/time/eta", OrderController.getETAs);

export default orderRouter;