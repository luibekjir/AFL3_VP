import { prismaClient } from "../utils/database-util"
import { calculateEta } from "../utils/eta-util";

export const OrderService = {
  create: async (customer_id: number, restaurant_id: number, items: number) => {
    const eta = calculateEta(items);

    return prismaClient.order.create({
      data: {
        customer_id,
        restaurant_id,
        items,
        eta,
      },
    });
  },

  getAll: () => prismaClient.order.findMany(),

  getByCustomer: (customer_id: number) =>
    prismaClient.order.findMany({ where: { customer_id } }),

  getByRestaurant: (restaurant_id: number) =>
    prismaClient.order.findMany({ where: { restaurant_id } }),

  getOrderTimes: () =>
    prismaClient.order.findMany({
      select: { id: true, ordered_at: true },
    }),

  getETAs: () =>
    prismaClient.order.findMany({
      select: { id: true, eta: true },
    }),
};
