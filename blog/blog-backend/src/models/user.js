import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
});

UserSchema.method.setPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};

UserSchema.method.checkPassword = async (password) => {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
}

const User = mongoose.model('User', UserSchema);
export default User;