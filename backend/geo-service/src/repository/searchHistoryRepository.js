export const makeSeachHistoryRepository = ({ dbClient, generateUUID }) => {
  return {
    create: async ({ origin, destination, distance }) => {
      return await dbClient("search_history").insert({
        id: generateUUID(),
        origin,
        destination,
        distance,
      });
    },
    get: async () => {
      return await dbClient("search_history").select("*");
    },
  };
};
