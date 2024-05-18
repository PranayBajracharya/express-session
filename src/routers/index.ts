import { demoRouter } from "./demo.route";
import { viewRouter } from "./view.route";

const routers = {
  "/demo": demoRouter,
  "/view": viewRouter,
} as const;

export { routers };
