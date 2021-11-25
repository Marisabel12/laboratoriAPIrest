import express, { Express } from "express";
import dotenv from "dotenv";
if (process.env.NODE_ENV == "development"){
   dotenv.config(); 
}
import mongoose, { Mongoose } from "mongoose";

import UserModule from "./modules/usermodules/init";

class App {
    private app: Express;
    private port: number; 
    private clientMongo: Mongoose
    private apiversion: string;
    constructor(){
    this.app = express();
    this.apiversion = process.env.API_VERSION || "api";
    this.port = Number(process.env.PORT) || 8000;
    this.clientMongo = mongoose;
    this.configure();
    this.configureDatabase();
    this.startModules();
    }
    private configure(){
        this.app.use(express.json());
        this.app.use(express.urlencoded());
    }
    private configureDatabase(){
        const dataBaseName = process.env.DB_NAME;
        const dataBaseHost = process.env.DB_HOST;
        const dataBasePort = process.env.DB_PORT;
        const dataBaseUser = process.env.DB_USER;
        const dataBasePassword = process.env.DB_PASSWORD;
        const connectionString = `mongodb://${dataBaseUser}:${dataBasePassword}@${dataBaseHost}:${dataBasePort}` 
        this.clientMongo.connect(connectionString);
        this.clientMongo.connection.on("open", () => {
            console.log("succes connect to database");
        } );
        this.clientMongo.connection.on("error", (err) => {
            console.error("can not connect to the database");
            console.error(err);
        });
    }
    private startModules(){
        console.log("load modules!");
        new UserModule("/user", this) //`${this.apiversion}/user`
    }
    public getApp(): Express {
        return this.app;
    }
    public getClientMongoose(): Mongoose {
        return this.clientMongo;
    }
    public getPort(): number {
        return  this.port;
    }
}
export default App;
export default App;
