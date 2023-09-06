import './App.css';
import React from 'react';
import Auth from './blocks/Auth/Auth';
import Header from './blocks/Header/Header';
import Menu from './blocks/Menu/Menu';
import Profile from './blocks/Profile/Profile';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Result from './blocks/Result/Result';
import Quiz from './blocks/Quiz/Quiz';
function App() {
  const [isLoggedin, setLoggedin] = React.useState(false);
  const navigate = useNavigate();
  function submitForm(e) {
    setLoggedin(true);
    navigate('/');
    console.log(isLoggedin);
  }

  return (
    <div className="App">
      <Routes>
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
          path='/'
          element={
            <>
              <Header isLoggedin={true} />
              <Profile />
            </>
          }
        />
        <Route
          path="*"
          element={<Navigate to={isLoggedin ? "/" : "/sign-in"} />}
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

      </Routes>


    </div>
  );
}

export default App;
