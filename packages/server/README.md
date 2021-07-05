# server

Handles requests and process data received from frontends.

## Contribute

1. Having the Node version specified in the `.nvmrc` and `yarn`, execute to install **specific** dependencies:

```bash
yarn
```

2. Make sure to have set a `.env` file with your configuration variables. You can find an example in the `.env.dist` file inside the project.
3. Execute the `dev` command set in the `package.json` file to start the project in local with your environment variables.
4. Migrations have to be run using the `yarn run db migrate:up` command. For this to work, you must have the container of the database up (read the main README.md for more information).

```bash
yarm run dev
```

<sub>The `yarn run db` utility can be mixed with several flags as explained [here](https://knexjs.org/#Migrations)</sub>

<sub>Connections to database when testing the project in local require the DB connection to be up, so please set the correct values in the `.env` file according the database you expect to work with.</sub>

4. Test the project status once has started with `curl` or something like Postman to the `api/v1/status` URL.

```bash
curl -i localhost:8080/api/v1/status
```

You should see a successfull response with a 200 code and a JSON having the current date and the "up" in true parameter.

## Notes

- Is possible to execute linter, tests and building of the single project. Check the `package.json` in the current folder for more information.
- The `yarn run db` is a shortcut for the use of Knex as ORM, so any command related with database will have to be done using this command.
