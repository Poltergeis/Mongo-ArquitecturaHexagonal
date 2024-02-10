import { createDulceController } from "./dependencies";
import { getAllDulcesController } from "./dependencies";
import express from "express";

export const dulceRouter = express.Router();

dulceRouter.post('/add', async(req,res) => {
    try{
        await createDulceController.run(req,res);
    }catch(error){
        return null;
    }
});

dulceRouter.get('/getAll', async(req,res) => {
    try{
        await getAllDulcesController.run(req,res);
    }catch(error){
        return null;
    }
});