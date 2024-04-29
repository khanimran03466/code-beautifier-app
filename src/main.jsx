import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import CssMinifyBtn from "./components/button-comp/CssMinifyBtn.jsx";
import SchemaFormatter from "./components/button-comp/SchemaFormatter.jsx";
import JsMinifierBtn from "./components/button-comp/JsMinifierBtn.jsx";
import HtmlFormatterBtn from "./components/button-comp/HtmlFormatterBtn.jsx";
import HtmlMinifyBtn from "./components/button-comp/HtmlMinifyBtn.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App /> }> 
      <Route path="/" element={<SchemaFormatter />} />
      <Route path="css-minifyer/" element={<CssMinifyBtn />} />
      <Route path="js-minifier/" element={<JsMinifierBtn  />} />
      <Route path="html-formatter/" element={<HtmlFormatterBtn />} />
      <Route path="html-minify/" element={<HtmlMinifyBtn />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
