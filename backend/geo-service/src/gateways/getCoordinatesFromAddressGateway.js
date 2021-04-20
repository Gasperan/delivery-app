export const makeGetCoordinatesFromAddressGateway = ({ httpClient }) => {
  return async ({ address }) => {
    const response = await httpClient.get(
      `https://nominatim.openstreetmap.org/search/${address}`,
      {
        params: {
          format: "json",
          addressdetails: 1,
          limit: 1,
          polygon_svg: 1,
        },
      }
    );
    return response.data[0];
  };
};
