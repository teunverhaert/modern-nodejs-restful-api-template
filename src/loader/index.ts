import diLoader from './di';
import mongooseLoader from './mongoose';
import Logger from './logger';

export default async () => {
    await mongooseLoader();
    Logger.info('DB connected');

    /*
    Define models here

    example:
    const userModel = {
        name: 'userModel',
        model: UserModel,
    };
     */

    await diLoader({
        models: [
            // Add models here
        ],
    });
    Logger.info('DI loaded');
};
