import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Temporary wrapper to handle body transition
function Root() {
  useEffect(() => {
    // Remove the 'transition-none' class after first render
    document.body.classList.remove("transition-none");
  }, []);

  return <App />;
}

// Make sure your <body> has 'transition-none' in index.html:
// <body class="bg-[#fafafa] dark:bg-[#111827] transition-none">

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
