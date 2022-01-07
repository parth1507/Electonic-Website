import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Service from "./Service";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Service />
    </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);

