import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import system from "./theme";
import App from "./app/App";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import ScrollToTop from "./animations/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <BrowserRouter>
        <main>
          <ScrollToTop />
          <Navbar />
          <App />
          <Footer />
        </main>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
