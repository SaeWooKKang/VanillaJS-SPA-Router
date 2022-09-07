import Landing from "./pages/Landing.js";
import Main from "./pages/Main.js";

import { router } from "./utils/index.js";

export const routes = [
  { path: /^\/$/, component: Landing },
  { path: /^\/main$/, component: Main },
];

router(routes, window.location.pathname);

window.addEventListener('popstate', () => 
  router(routes, window.location.pathname)
);