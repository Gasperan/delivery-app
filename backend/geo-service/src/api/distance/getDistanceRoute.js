export const makeGetDistanceRoute = ({ handler, schema }) => {
  return async ({ server }) => {
    server.route({
      method: "GET",
      url: "/distance",
      schema,
      handler,
    });
  };
};
