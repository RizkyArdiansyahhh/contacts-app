import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";

import "./styles/style.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ContactApp></ContactApp>);
