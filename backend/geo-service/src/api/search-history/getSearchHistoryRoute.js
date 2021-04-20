export const makeGetSearchHistoryRoute = ({ handler, schema }) => {
  return async ({ server }) => {
    server.route({
      method: "GET",
      url: "/search-history",
      schema,
      handler,
    });
  };
};
