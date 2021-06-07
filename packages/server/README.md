# server

Handles requests and process data received from frontends.

## Contribute

1. Having Node 14.\* installed and the Node Package Manager `npm`, execute in the root folder:

```bash
npm install
```

2. Make sure to have set a `.env` file with your configuration variables. You can find an example in the `.env.dist` file inside the project.
3. Execute the `dev` command in the `package.json` file to start the project in local with your environment variables.

```bash
npm run dev
```

4. Test the project status once has started with `curl` or something like Postman to the `api/v1/status` URL.

```bash
curl -i localhost:8080/api/v1/status
```

You should see a successfull response with a 200 code and a JSON having the current date and the "up" in true parameter.

## Code form

We add the `prettier` and `eslint` tools to format and enforce clean writting code rules that are embedded in the `lint` command.

```bash
npm run lint
```

We strongly recommend you to install de VSCode Prettier plugin and set it as default formatter to format on the fly when saving following our rules.
