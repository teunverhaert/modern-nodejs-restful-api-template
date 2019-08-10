import {Inject, Service} from 'typedi';
import {Model, Document} from 'mongoose';
import {IUser} from '../../interface/user/IUser';

@Service()
export default class UserRepository {
    @Inject('userModel') private userModel: Model<IUser & Document>;

    public getUsers(type?: string) {
        const query: any = {};
        if (type) {
            //TODO: check if type is valid
            query._type = type;
        }
        return this.userModel.find(query).exec();
    }

    public getById(id: string) {
        return this.userModel.findById(id);
    }
}
