import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeConfig from "./theme";
import ChatProvider from "app/chat/ui/context/chat.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeConfig>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ThemeConfig>
  </React.StrictMode>,
);
