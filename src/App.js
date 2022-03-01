import logo from "./logo.svg";
import "./App.css";
import "./Antd.less";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/common/HeaderContainer";
import loadable from '@loadable/component';
import JournalCalendarContainer from './containers/dashboard/journal/JournalCalendarContainer.js';


const MainPage = loadable(() => import('./pages/main/MainPage'));
const LoginPage = loadable(() => import('./pages/auth/LoginPage'));
const RegisterPage = loadable(() => import('./pages/auth/RegisterPage'));
const DashBoardPage = loadable(() => import('./pages/dashBoard/DashBoardPage'));

function App() {
  return (
    <div>
      <HeaderContainer/>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashBoard" element={<DashBoardPage />} >
          <Route path="journal-calendar" element={<JournalCalendarContainer/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
