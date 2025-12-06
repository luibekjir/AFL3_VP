import { prismaClient } from "../utils/database-util"

export const CustomerService = {
    create: (data: any) => prismaClient.customer.create({ data }),

    getById: (id: number) =>
        prismaClient.customer.findUnique({where: {id}}),

    updateName: (id: number, name:string) =>
        prismaClient.customer.update({where: {id}, data: {name}}),

    updatePhone: (id: number, phone:string) =>
        prismaClient.customer.update({where: {id}, data: {phone}}),

    delete: (id: number) =>
        prismaClient.customer.delete({where: {id}})
}