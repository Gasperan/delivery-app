import { getCoordinatesFromAddressGateway } from "../gateways/";
import { searchHistoryRepository } from "../repository";
import { calculateDistanceBetweenPoints } from "./commons/calculateDistanceBetweenPoints";
import { makeCalculateDistanceUseCase } from "./calculateDistanceUseCase";
import { makeRetrieveSearchHistoryUseCase } from "./retrieveSearchHistoryUseCase";

const calculateDistaceUseCase = makeCalculateDistanceUseCase({
  calculateDistanceBetweenPoints,
  searchHistoryRepository,
  getCoordinatesFromAddressGateway,
});

const retrieveSearchHistoryUseCase = makeRetrieveSearchHistoryUseCase({
  searchHistoryRepository,
});

export { calculateDistaceUseCase, retrieveSearchHistoryUseCase };
