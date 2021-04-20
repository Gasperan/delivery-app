#!/bin/sh
node node_modules/knex/bin/cli.js migrate:latest --knexfile ./dist/src/configuration/databaseConfiguration.js
node dist/src/server.js
