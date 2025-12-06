import { Request, Response } from "express";
import { RestaurantService } from "../services/restaurant-service";

export const RestaurantController = {
  create: async (req: Request, res: Response) => {
    const result = await RestaurantService.create(req.body);
    res.json(result);
  },

  getAll: async (_: Request, res: Response) => {
    res.json(await RestaurantService.getAll());
  },

  getById: async (req: Request, res: Response) => {
    res.json(await RestaurantService.getById(Number(req.params.id)));
  },

  getByStatus: async (req: Request, res: Response) => {
    const isOpen = req.params.status === "open";
    res.json(await RestaurantService.getByStatus(isOpen));
  },

  updateName: async (req: Request, res: Response) => {
    res.json(
      await RestaurantService.updateName(Number(req.params.id), req.body.name)
    );
  },

  updateDesc: async (req: Request, res: Response) => {
    res.json(
      await RestaurantService.updateDesc(
        Number(req.params.id),
        req.body.description
      )
    );
  },

  updateStatus: async (req: Request, res: Response) => {
    res.json(
      await RestaurantService.updateStatus(
        Number(req.params.id),
        req.body.open
      )
    );
  },

  delete: async (req: Request, res: Response) => {
    await RestaurantService.delete(Number(req.params.id));
    res.json({ message: "Restaurant deleted" });
  },
};
