import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { Suspense } from "react";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],

    fallbackLng: "en",

    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      // cache user language on
      caches: ["cookie"],
    },

    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const loadingMarkup = (
  <div>
    <h2>loading ....</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);
