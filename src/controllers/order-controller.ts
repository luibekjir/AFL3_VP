import { Request, Response } from "express";
import { OrderService } from "../services/order-service";

export const OrderController = {
  create: async (req: Request, res: Response) => {
    const { customerId, restaurantId, items } = req.body;
    const result = await OrderService.create(
      Number(customerId),
      Number(restaurantId),
      Number(items)
    );
    res.json(result);
  },

  getAll: async (res: Response) => {
    res.json(await OrderService.getAll());
  },

  getByCustomer: async (req: Request, res: Response) => {
    res.json(await OrderService.getByCustomer(Number(req.params.id)));
  },

  getByRestaurant: async (req: Request, res: Response) => {
    res.json(await OrderService.getByRestaurant(Number(req.params.id)));
  },

  getOrderTimes: async (res: Response) => {
    res.json(await OrderService.getOrderTimes());
  },

  getETAs: async (res: Response) => {
    res.json(await OrderService.getETAs());
  },
};
