import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router";

import App from './App.jsx'
import LogIn from './Pages/Auth/Log_in.jsx'
import SignUp from './Pages/Auth/Sign_up.jsx'
import Child_Dashboard from './Pages/Children_Dashboard/Child_Dashboard.jsx';
import Child_Form from './Pages/Children_Dashboard/Child_Form.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Child_Dashboard" element={<Child_Dashboard />}/>
      <Route path="/Child_Form" element={<Child_Form />}/>
    </Routes>
  </BrowserRouter>
);

