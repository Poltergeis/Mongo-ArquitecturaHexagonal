import mongoose from "mongoose";
import { Signale } from "signale";
import dotenv from 'dotenv';

dotenv.config();
const signale = new Signale();

export async function dbConnection() {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/dulces`);
        console.log('Database connected successfully');
    } catch (error) {
        signale.error(`Error: ${error}`);
        process.exit(1);
    }
};

export async function runDatabase(){
    try{
        console.log(process.env.DB_HOST);
        await dbConnection();
        console.log('connected to Database, mongo is listening');
    }catch(error){
        signale.error("couldn't connect to DB",error);
        process.exit(1);
    }
}

export async function endDatabase() {
    try {
        await mongoose.connection.close();
        console.log('Database connection closed successfully');
    } catch (error) {
        signale.error(`Error: ${error}`);
    }
}