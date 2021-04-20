import { makeGetCoordinatesFromAddressGateway } from "../getCoordinatesFromAddressGateway";

const httpClient = {
  get: jest.fn(),
};

const getCoordinatesFromAddressGateway = makeGetCoordinatesFromAddressGateway({
  httpClient,
});

it("should call external api with expected args", async () => {
  httpClient.get.mockResolvedValue({
    data: [
      {
        someKeys: "someValues",
      },
    ],
  });
  await getCoordinatesFromAddressGateway({ address: "any-address" });

  expect(
    httpClient.get
  ).toHaveBeenCalledWith(
    "https://nominatim.openstreetmap.org/search/any-address",
    { params: { addressdetails: 1, format: "json", limit: 1, polygon_svg: 1 } }
  );
});

it("should return only the first value in the array", async () => {
  httpClient.get.mockResolvedValue({
    data: [
      {
        someKeys: "someValues",
      },
    ],
  });
  const response = await getCoordinatesFromAddressGateway({
    address: "any-address",
  });

  expect(response).toEqual({ someKeys: "someValues" });
});
