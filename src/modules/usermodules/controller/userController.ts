import { Request, Response } from "express";
import { Model, Mongoose } from "mongoose";
import { createModel, User } from "../model/UserModel";

class UserController {
    private userModel: Model<User>;
    constructor(mongoose: Mongoose){
        this.userModel = createModel(mongoose);
    }
    public create(request: Request, response: Response){}
    public update(request: Request, response: Response){}
    public get(request: Request, response: Response){}
    public delete(request: Request, response: Response){}
    public login(request: Request, response: Response){}
    public singOut(request: Request, response: Response){}
}
export default UserController;