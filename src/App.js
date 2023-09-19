import './App.css';
import React from 'react';
import Auth from './blocks/Auth/Auth';
import Header from './blocks/Header/Header';
import Profile from './blocks/Profile/Profile';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Result from './blocks/Result/Result';
import Quiz from './blocks/Quiz/Quiz';
import EmployeeSearch from './pages/EmployeeSearch';
function App() {
  const [isLoggedin, setLoggedin] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  function submitForm(e) {
    setLoggedin(true);
    navigate('/profile');
  }
  
  
  return (
    <div className="App">
      <Routes location={location}>
        <Route
          path='/sign-in'
          element={
            <>
              <Header isLoggedin={false} />
              <Auth onClick={submitForm} />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header isLoggedin={true} />
              <Profile />
            </>
          }
        />
        <Route
          path="*"
          element={<Navigate to={isLoggedin ? "/profile" : "/sign-in"} />}
        />

        <Route
          path='/your-score/1'
          element={
            <>
              <Header isLoggedin={true} />
              <Result />
            </>
          }
        />

        <Route
          path='/quiz'
          element={
            <>
              <Header isLoggedin={true} />
              <Quiz />
            </>
          }
        />

        <Route 
          path='/employee-search'
          element={
            <>
              <Header isLoggedin={true} />
              <EmployeeSearch />
            </>
          }
        />

      </Routes>


    </div>
  );
}

export default App;
