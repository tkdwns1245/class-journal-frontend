import logo from "./logo.svg";
import "./App.css";
import "./Antd.less";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./containers/common/HeaderContainer";
import loadable from '@loadable/component';
import JournalCalendarContainer from './containers/dashboard/journal/JournalCalendarContainer.js';
import EvaluationContainer from'./containers/dashboard/journal/EvaluationContainer.js';
import Footer from './components/common/Footer';
import {useSelector, useDispatch} from 'react-redux';
import {Navigate, useNavigate,useLocation} from 'react-router-dom';

const MainPage = loadable(() => import('./pages/main/MainPage'));
const LoginPage = loadable(() => import('./pages/auth/LoginPage'));
const RegisterPage = loadable(() => import('./pages/auth/RegisterPage'));
const DashBoardPage = loadable(() => import('./pages/dashBoard/DashBoardPage'));
const RedPage = loadable(() => import("./pages/RedPage"));

function App() {
  return (
    <div style={{height:'100%'}}>
      <HeaderContainer/>

      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashBoard" element={
                                  <ProtectedRoute>
                                    <DashBoardPage />
                                  </ProtectedRoute>} >
          <Route path="journal-calendar" element={<JournalCalendarContainer/>} />
          <Route path="evaluation" element={<EvaluationContainer/>} />
        </Route>
      </Routes>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const {selectedJournal,user} = useSelector(({journal,user}) => ({
      selectedJournal: journal.selectedJournal,
      selectedMonth: journal.selectedMonth,
      user:user.user
  }));

  const location = useLocation();
  if(!user) {
    if (typeof window !== 'undefined') { alert('로그인 이후 사용해주세요') }
    return <Navigate to="/login" replace state={{ from: location }} />;
  }else if(!selectedJournal) {
    if (typeof window !== 'undefined') { alert('학급일지를 먼저 선택해주세요') }
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};
export default App;
