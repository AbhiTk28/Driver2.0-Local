import mongoose from 'mongoose';
import UserModel from "./user.js";

const connectDb = () => {
    return mongoose.connect("mongodb://localhost:27017/node-express-mongodb-server");
};

export {connectDb}
export default {UserModel}
