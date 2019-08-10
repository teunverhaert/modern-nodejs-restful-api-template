import mongoose from 'mongoose';
import {Db} from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
    const conn = await mongoose.connect(config.databaseUrl, {useNewUrlParser: true, useCreateIndex: true});
    return conn.connection.db;
}
