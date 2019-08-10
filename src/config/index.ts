import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    // This error should crash whole process
    throw new Error("Couldn't find .env file️");
}

const version = 'v'.concat(process.env.npm_package_version.split('.')[0]);

export default {
    port: parseInt(process.env.PORT, 10),
    databaseUrl: process.env.DATABASE_URL,
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        version, // Major version number
        prefix: '/api'.concat('/', version),
    }
};
