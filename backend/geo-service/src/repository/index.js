import Knex from "knex";
import { uuid } from "uuidv4";
import databaseConfiguration from "../configuration/databaseConfiguration";
import { makeSeachHistoryRepository } from "./searchHistoryRepository";

export const dbClient = Knex(databaseConfiguration);

const searchHistoryRepository = makeSeachHistoryRepository({
  dbClient,
  generateUUID: uuid,
});

export { searchHistoryRepository };
