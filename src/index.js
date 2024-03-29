import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Theme/theme.js"
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./store/store";


axios.defaults.baseURL = "https://fraazo-clone-web17.herokuapp.com/";
axios.defaults.headers["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  // </React.StrictMode>
);

reportWebVitals();
