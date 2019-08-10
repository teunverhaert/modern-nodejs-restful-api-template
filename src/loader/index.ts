import diLoader from './di';
import mongooseLoader from './mongoose';
import Logger from './logger';
import UserModel from '../model/user/user';

export default async ({expressApp}) => {
    await mongooseLoader();
    Logger.info('DB connected');

    const userModel = {
        name: 'userModel',
        model: UserModel,
    };

    await diLoader({
        models: [
            userModel,
            // add other models here
        ],
    });
    Logger.info('DI loaded');
}
