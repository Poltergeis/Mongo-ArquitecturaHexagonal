import { Router } from "express";
import { getAllSucursalesController, addSucursalController, delSucursalController, clearSucursalesController } from "./dependencies";

export const sucursalRouter = Router();

sucursalRouter.post('/add', async (req,res) => {
    try{
        await addSucursalController.run(req,res);
    }catch(error){
        return null;
    }
});

sucursalRouter.get('/getAll', async (req,res) => {
    try{
        await getAllSucursalesController.run(req,res);
    }catch(error){
        return null;
    }
});

sucursalRouter.delete('/clear', async (req,res) => {
    try{
        await clearSucursalesController.run(req,res);
    }catch(error){
        return null;
    }
});

sucursalRouter.delete('/delOne/:nombre', async (req,res) => {
    try{
        await delSucursalController.run(req,res);
    }catch(error){
        return null;
    }
});