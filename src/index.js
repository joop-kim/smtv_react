import React from "react";
import ReactDOM from "react-dom/client";
//mport "./index.css";
import "./assets/fonts/boxicons/css/boxicons.css";
import "./assets/vendor/node_modules/css/aos.css";
import "./assets/fonts/iconsmind/iconsmind.css";
import "./assets/vendor/masterslider/style/masterslider.css";
import "./assets/vendor/node_modules/css/swiper-bundle.min.css";
import App from "./main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
