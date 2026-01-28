import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import system from "./theme";
import App from "./app/App";
import { Navbar } from "./components/common/Navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
