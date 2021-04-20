import fastify from "fastify";
import { registerRoutes } from "./api";

const start = async () => {
  try {
    const server = fastify({ logger: true });
    server.register(require("fastify-cors"), { origin: "*" });

    await registerRoutes({ server });

    await server.listen(3001, "0.0.0.0");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
