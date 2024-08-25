import * as buffer from "buffer/index";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WalletContext } from "./WalletContext.tsx";

if (typeof (window as any).global === "undefined") {
  (window as any).global = window;
}
if (typeof (window as any).Buffer === "undefined") {
  (window as any).Buffer = buffer.Buffer;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletContext>
      <App />
    </WalletContext>
  </StrictMode>
);
