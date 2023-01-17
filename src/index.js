import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./App";
import './index.css';
import Header1 from "./grid.js";
import Section from "./topoffers";
import Index from "./topoffers";

let element = document.getElementById('root');
let element1 = ReactDOM.createRoot(element);

element1.render(
  <>
    <Header />
    <Header1 />
    <Section />
    <Index />
  </>
)