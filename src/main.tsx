import { Buffer } from "buffer";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WalletContext } from "./WalletContext.tsx";

(global as any).Buffer = Buffer;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WalletContext>
      <App />
    </WalletContext>
  </StrictMode>
);
