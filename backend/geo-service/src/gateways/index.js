import axios from "axios";
import { makeGetCoordinatesFromAddressGateway } from "./getCoordinatesFromAddressGateway";

const getCoordinatesFromAddressGateway = makeGetCoordinatesFromAddressGateway({
  httpClient: axios,
});

export { getCoordinatesFromAddressGateway };
