import { Router } from "express";
import { CustomerController } from "../controllers/customer-controller";

const customerRouter = Router();

customerRouter.post("/", CustomerController.create);
customerRouter.get("/:id", CustomerController.getById);
customerRouter.put("/:id/name", CustomerController.updateName);
customerRouter.put("/:id/phone", CustomerController.updatePhone);
customerRouter.delete("/:id", CustomerController.delete);

export default customerRouter;
