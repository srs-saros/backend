# Backend

Handles requests (authorization and CRUD for models) and process data (from antenna's recording) received from frontends.

# Architecure

The current repository is a [monorepository](https://www.perforce.com/blog/vcs/what-monorepo) that contains:

- The `server` folder that contains a NodeJS project that works as a basic API server.
- The `broker` folder that contains a NodeJS project with MQTT that works as message broker for data sent from frontends.
- The `backend-database` stored in the `.docker` folder.

# Contribute

1. Check your Node version as [detailed here](#node-version).
2. [Install `yarn`](https://classic.yarnpkg.com/en/docs/install#debian-stable) and add global dependencies running `yarn` (yes, just `yarn` in the console).
3. Get inside each one of the projects in the `packages` folder and start coding!
4. The development of features that requires to insert to database will require the execution of the database container using the `yarn run db:start` command.

<sub>If don't know what's `yarn`, think about it as `npm`, they both do the same.</sub>

# Monorepository management

We use `lerna` and `yarn` as workspaces and dependencies managers for monorepositories ([check more info about these here](https://rachitabansal.medium.com/introduction-to-lerna-3fb7382a4d4e)). Therefore you can use any of the [lerna commands](https://github.com/lerna/lerna/tree/main/commands) plus [yarn methods](https://yarnpkg.com/cli/install). Particulary we have defined:

### `yarn run build`

Executes `lerna build` building **all the packages inside the `packages` folder**.

### `yarn run clean`

Executes `lerna clean` cleaning buidling folders for **all the packages inside the `packages` folder**.

### `yarn run lint`

Executes `eslint` reviewing the code for **all the files inside packages inside the `packages` folder**.

### `yarn run test`

Executes `yarn build` and `jest` executing all the tests **inside the `packages` folder**. There's an interactive variant of `jest` with `yarn test:watch`.

### `yarn run db`

Executes `docker-compose` to start the container that works as the PostgreSQL database.

## Code form

We add the `prettier` and `eslint` tools to format and enforce clean writting code rules that are embedded in the `lint` command.

```bash
npm run lint
```

We strongly recommend you to install de VSCode Prettier plugin and set it as default formatter to format on the fly when saving following our rules.

## Node version

The current project is being developed with the Node version specified in the `.nvmrc` file. You can check your Node version with `node --version` and use/change it if appropiated or use something like [nvmrc](https://github.com/nvm-sh/nvm/blob/master/README.md) and execute `nvm use` in the root folder of the project to set to the project version.

## Git hooks

We have set a `pre-push` git hook to be executed _before each push_ that runs the lint and test validations in order to avoid having testing, formatting and coding standards errors.

## Docker

To effectively develop you'll need to start and use the PostgreSQL database. For that we use Docker as container manager along with Docker Compose to parametrize it (this is a work in progress). You'll need to have:

- Docker version 20.10.7 at least
- Docker Compose 1.29.2 at least

To correctly execute the database container, is mandatory to add the current user to non root users that can execute Docker. Check [this](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) for more information.
