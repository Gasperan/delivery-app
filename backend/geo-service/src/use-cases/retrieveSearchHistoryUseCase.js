export const makeRetrieveSearchHistoryUseCase = ({
  searchHistoryRepository,
}) => {
  return async () => {
    const searchHistory = searchHistoryRepository.get();
    return searchHistory;
  };
};
