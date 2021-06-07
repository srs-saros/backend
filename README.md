# srs-backend

Handles requests (authorization and CRUD for models) and process data (from antenna's recording) received from frontends.

# Architecure

The current repository is a (monorepository)[https://www.perforce.com/blog/vcs/what-monorepo] that contains:

- The `server` folder that contains a NodeJS project that works as a basic API server.
- The `broker` folder that contains a NodeJS project with MQTT that works as message broker for data sent from frontends.
