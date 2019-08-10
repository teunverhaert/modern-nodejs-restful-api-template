# Modern NodeJS project template

This NodeJS project template makes use of modern frameworks like **Typescript** and **typedi** for dependency injection. All the used packages and links to their github pages will be listed in this file.

The architecture of this project is based on the ['Bulletproof node.js project architecture'](https://softwareontheroad.com/ideal-nodejs-project-structure?utm_source=github&utm_medium=readme) blog post.

## Development

**This project uses node version `10.16.0`**

#### Initializing the project

* installing packages

```
npm intall
```

* Changing environment variables

Rename [.env_template](./env_template) file to `.env` and set the `PORT` and `DATABASE_URL` variables.

#### Starting the server

```
npm start
```

#### Starting the server with nodemon

```
npm start:watch
```

When using **nodemon** the server will automatically restart when changes are saved.

#### Building

```
npm build
```

Because this project uses Typescript instead of plain JavaScript the ``build`` command is needed to convert the code.

#### Running unit tests

*testing is not yet available*

## Using the template

An explanation and example for each folder in the project can be found in the `README.md` file of the folder.

## Packages

### Dependencies
[express](https://github.com/expressjs/express): A module for creating RESTful API's.

[mongoose](https://github.com/Automattic/mongoose): A module for connection to a **mongoDB** database and creating schemas.

[routing-controllers](https://github.com/pleerock/routing-controllers): A module that enables defining API enpoints using annotations.

[typedi](https://github.com/pleerock/typedi): A module used for dependency injection.

[body-parser](https://github.com/expressjs/body-parser): Used by the **routing-controllers** package for converting from and to JSON.

[cors](https://github.com/expressjs/cors): Used by the **routing-controllers** package for enabling CORS.

[dotenv](https://github.com/motdotla/dotenv): A module to load environment variables from a `.env` file into `process.env`.

[multer](https://github.com/expressjs/multer): Used by the **routing-controllers** package for handling `multipart/form-data`, which is primarily used for uploading files.

[reflect-metadata](https://github.com/rbuckton/reflect-metadata): A module used to enable annotations

[winston](https://github.com/winstonjs/winston): A module used for logging.
