import { createServer, get, globalAgent, request, Server } from "https://deno.land/std@0.122.0/node/https.ts";

class Agent {
  destroy() {}
}

export default {
  Agent,
  Server,
  createServer,
  get,
  globalAgent,
  request,
};
