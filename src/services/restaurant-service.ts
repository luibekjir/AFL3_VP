import { create } from "domain"
import { prismaClient } from "../utils/database-util"

export const RestaurantService = {
    create: (data: any) =>
        prismaClient.restaurant.create({ data }),

    getAll: () => prismaClient.restaurant.findMany(),

    getById: (id: number) =>
        prismaClient.restaurant.findUnique({ where: { id } }),

    getByStatus: (isOpen: boolean) =>
        prismaClient.restaurant.findMany({ where: { isOpen: isOpen } }),

    updateName: (id: number, name: string) =>
        prismaClient.restaurant.update({ where: { id }, data: { name } }),

    updateDesc: (id: number, description: string) =>
        prismaClient.restaurant.update({ where: { id }, data: { description } }),

    updateStatus: (id: number, open: boolean) =>
        prismaClient.restaurant.update({ where: { id }, data: { isOpen: open } }),

    delete: (id: number) =>
        prismaClient.restaurant.delete({ where: { id } }),


}