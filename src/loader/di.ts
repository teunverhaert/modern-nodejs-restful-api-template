import {Container} from 'typedi';
import Logger from './logger'

export default ({models}: { models: { name: string; model: any }[] }) => {
    try {
        models.forEach(m => {
            Container.set(m.name, m.model);
        });
    } catch (e) {
        Logger.error(e);
        throw e;
    }
}
