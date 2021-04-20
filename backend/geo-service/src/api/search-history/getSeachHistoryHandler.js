export const makeGetSearchHistoryHandler = ({
  retrieveSearchHistoryUseCase,
}) => {
  return async (_, reply) => {
    const searchHistory = await retrieveSearchHistoryUseCase();
    reply.send(searchHistory);
  };
};
