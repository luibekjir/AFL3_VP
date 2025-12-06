import { Request, Response } from "express";
import { CustomerService } from "../services/customer-service";
import { create } from "domain";

export const CustomerController = {
    create: async (req: Request, res: Response) => {
        const result = await CustomerService.create(req.body);
        res.json(result);
    },

    getById: async (req: Request, res: Response) =>{
        const result = await CustomerService.getById(Number(req.params.id));
        res.json(result);
    },

    updateName: async (req: Request, res: Response) => {
        const r = await CustomerService.updateName(
            Number(req.params.id),
            req.body.name
        );
        res.json(r);
    },

    updatePhone: async (req: Request, res: Response) => {
        const r = await CustomerService.updatePhone(
            Number(req.params.id),
            req.body.phone
        );
        res.json(r);
    },

    delete: async (req: Request, res: Response) => {
        await CustomerService.delete(Number(req.params.id));
        res.json({ message: "Customer Deleted" })
    }
}