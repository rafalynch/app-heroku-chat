import { Router } from "@vaadin/router";

const outlet = document.querySelector(".root");
const router = new Router(outlet);
router.setRoutes([
  { path: "/home", component: "custom-home" },
  { path: "/", redirect: "/home" },
  { path: "/chat", component: "custom-chat" },
]);
