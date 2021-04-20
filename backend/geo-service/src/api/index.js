import {
  calculateDistaceUseCase,
  retrieveSearchHistoryUseCase,
} from "../use-cases/";

import {
  makeGetDistanceSchema,
  makeGetDistanceRoute,
  makeGetDistanceHandler,
} from "./distance/";

import {
  makeGetSearchHistoryHandler,
  makeGetSearchHistoryRoute,
  makeGetSearchHistorySchema,
} from "./search-history/";

const getDistanceSchema = makeGetDistanceSchema({});
const getDistanceHandler = makeGetDistanceHandler({ calculateDistaceUseCase });
const getDistanceRoute = makeGetDistanceRoute({
  handler: getDistanceHandler,
  schema: getDistanceSchema,
});

const getSearchHistorySchema = makeGetSearchHistorySchema({});
const getSeachHistoryHandler = makeGetSearchHistoryHandler({
  retrieveSearchHistoryUseCase,
});
const getSearchHistoryRoute = makeGetSearchHistoryRoute({
  handler: getSeachHistoryHandler,
  schema: getSearchHistorySchema,
});

const registerRoutes = async ({ server }) => {
  await getDistanceRoute({ server });
  await getSearchHistoryRoute({ server });
};

export { registerRoutes };
