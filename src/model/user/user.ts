import {IUser} from '../../interface/user/IUser';
import {Document, model, Schema} from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['m', 'f']
    },
    birthDate: {
        type: Date
    }
});

export default model<IUser & Document>('User', userSchema);

