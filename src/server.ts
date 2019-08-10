import 'reflect-metadata'; // Needed in order to use decorators
import config from './config';
import Logger from './loader/logger';
import {createExpressServer, useContainer} from 'routing-controllers';
import UserController from './controller/user/UserController';
import {Container} from 'typedi';

async function startServer() {
    useContainer(Container);

    const app = createExpressServer({
        defaults: {
            nullResultCode: 404
        },
        routePrefix: config.api.prefix,
        cors: true,
        classTransformer: false,
        controllers: [
            UserController
        ]
    });

    await require('./loaders').default({expressApp: app});

    app.listen(config.port, err => {
        if (err) {
            Logger.error(err);
            process.exit(1);
            return;
        }
        Logger.info(`Server listening on port: ${config.port}`);
        Logger.info(`Running version: ${config.api.version}`);
    });
}

startServer();
