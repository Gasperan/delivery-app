export const makeCalculateDistanceUseCase = ({
  calculateDistanceBetweenPoints,
  getCoordinatesFromAddressGateway,
  searchHistoryRepository,
}) => {
  return async ({ origin, destination }) => {
    const {
      lat: originLatitude,
      lon: originLongitude,
      display_name: originAddress,
    } = await getCoordinatesFromAddressGateway({
      address: origin,
    });

    const {
      lat: destinationLatitude,
      lon: destinationLongitude,
      display_name: destinationAddress,
    } = await getCoordinatesFromAddressGateway({
      address: destination,
    });

    const distanceInKilometers = await calculateDistanceBetweenPoints({
      originLatitude,
      originLongitude,
      destinationLatitude,
      destinationLongitude,
    });

    const distance = {
      originAddress,
      originLatitude,
      originLongitude,
      destinationAddress,
      destinationLatitude,
      destinationLongitude,
      distanceInKilometers: Number(distanceInKilometers.toString()),
    };

    await searchHistoryRepository.create({
      origin,
      destination,
      distance: Number(distanceInKilometers.toString()),
    });

    return distance;
  };
};
