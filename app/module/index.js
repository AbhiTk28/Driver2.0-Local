const mongoose = require('mongoose')

import User from './user';

const connectDb = () => {
    return mongoose.connect("mongodb://localhost:27017/node-express-mongodb-server");
};

const models = { User };

export { connectDb };

export default models;
