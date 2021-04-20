import { makeGetDistanceHandler } from "../getDistanceHandler";

const calculateDistaceUseCase = jest.fn();
const getDistanceHandler = makeGetDistanceHandler({ calculateDistaceUseCase });

const request = {
  query: {
    origin: "any-origin",
    destination: "any-destination",
  },
};

const reply = {
  send: jest.fn(),
};

afterEach(() => {
  calculateDistaceUseCase.mockClear();
  reply.send.mockClear();
});

it("should call use case with expected arguments", async () => {
  await getDistanceHandler(request, reply);

  expect(calculateDistaceUseCase).toHaveBeenCalledWith({
    origin: "any-origin",
    destination: "any-destination",
  });
});

it("should reply with distance object when everthing finish ok", async () => {
  calculateDistaceUseCase.mockResolvedValue({
    originAddress: "originAddress",
    originLatitude: "originLatitude",
    originLongitude: "originLongitude",
    destinationAddress: "destinationAddress",
    destinationLatitude: "destinationLatitude",
    destinationLongitude: "destinationLongitude",
    distanceInKilometers: 1234567,
  });
  await getDistanceHandler(request, reply);

  expect(reply.send).toHaveBeenCalledWith({
    originAddress: "originAddress",
    originLatitude: "originLatitude",
    originLongitude: "originLongitude",
    destinationAddress: "destinationAddress",
    destinationLatitude: "destinationLatitude",
    destinationLongitude: "destinationLongitude",
    distanceInKilometers: 1234567,
  });
});
