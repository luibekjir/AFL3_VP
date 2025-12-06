import { Router } from "express";
import { RestaurantController } from "../controllers/restaurant-controller";

const restaurantRouter = Router();

restaurantRouter.post("/", RestaurantController.create);
restaurantRouter.get("/", RestaurantController.getAll);
restaurantRouter.get("/:id", RestaurantController.getById);
restaurantRouter.get("/status/:status", RestaurantController.getByStatus);

restaurantRouter.put("/:id/name", RestaurantController.updateName);
restaurantRouter.put("/:id/description", RestaurantController.updateDesc);
restaurantRouter.put("/:id/status", RestaurantController.updateStatus);

restaurantRouter.delete("/:id", RestaurantController.delete);

export default restaurantRouter;
