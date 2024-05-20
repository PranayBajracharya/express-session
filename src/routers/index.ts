import { usersRouter } from "./users.route";
import { viewRouter } from "./view.route";

const routers = {
  ["users"]: usersRouter,
  ["view"]: viewRouter,
} as const;

export { routers };
