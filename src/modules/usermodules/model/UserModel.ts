import { Mongoose, Schema, Document } from "mongoose";
export interface User extends Document {
    name: string;
    email: string;
    password: string;
    createAT: Date;
    updateAt: Date;
}
const userSchema = new Schema({
    name: {type: String, required: true},

    email: {
        type: String, 
        required: true, 
        validate: {
        validator: (v: string) => {
            return /^[\w\.]+@\w+[.][\w]{2,3}s/.test(v);
        },
        message: (props: any) => `${props.value} no es un corre valido`,
    },
},
    password: { type:String, required: true},
    createAt: { type: String, default: Date.now()},
    updateAt: { type: Date},
});
export const createModel = (mongoose: Mongoose) => {
    return mongoose.model("user, userSchema");
};