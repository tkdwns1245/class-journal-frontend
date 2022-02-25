import logo from "./logo.svg";
import "./App.css";
import "./Antd.less";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/common/HeaderContainer";
import loadable from '@loadable/component';


const MainPage = loadable(() => import('./pages/main/MainPage'));
const RedPage = loadable(() => import('./pages/RedPage'));
const BluePage = loadable(() => import('./pages/BluePage'));
const LoginPage = loadable(() => import('./pages/auth/LoginPage'));
const RegisterPage = loadable(() => import('./pages/auth/RegisterPage'));

function App() {
  return (
    <div>
      <HeaderContainer/>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
