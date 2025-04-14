import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Picture from "./Picture.jsx";
import Result from "./Result.jsx";
import Select from "./Select.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Picture" element={<Picture />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);