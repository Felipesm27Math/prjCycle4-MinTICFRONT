import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from "pages/Index";
import IndexUsuarios from "pages/usuarios/Index";
import IndexAvances from 'pages/avances/Index';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<App/>}>
        <Route index element={<Index/>}/>
        <Route path="/usuarios" element={<IndexUsuarios/>}/>  
        <Route path="/avances" element={<IndexAvances/>}/>
       </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
