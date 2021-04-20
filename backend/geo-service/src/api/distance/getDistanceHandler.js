export const makeGetDistanceHandler = ({ calculateDistaceUseCase }) => {
  return async (request, reply) => {
    const { origin, destination } = request.query;

    const distance = await calculateDistaceUseCase({ origin, destination });

    reply.send(distance);
  };
};
