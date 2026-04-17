import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

// Mounts the WHOOP linking prototype at `#root` (see index.html). In a full Ognomy app this route
// would sit under patient settings or onboarding, with real auth + API client injected.

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
