import { makeGetDistanceRoute } from "../getDistanceRoute";

const server = {
  route: jest.fn(),
};
const handler = jest.fn();
const schema = {};

const getDistanceRoute = makeGetDistanceRoute({ handler, schema });

it("should register endpoint with expected arguments", async () => {
  await getDistanceRoute({ server });

  expect(server.route).toHaveBeenCalledWith({
    handler,
    method: "GET",
    schema,
    url: "/distance",
  });
});
