import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {name: {type: String, required: true}});

userSchema.statics.getAllUsers = async function () {
    return await this.find({});
}

const UserModel = mongoose.model('User', userSchema);

export default UserModel;

