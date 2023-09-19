import './App.css';
import React from 'react';
import Auth from './blocks/Auth/Auth';
import Header from './blocks/Header/Header';
import Profile from './blocks/Profile/Profile';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Result from './blocks/Result/Result';
import Quiz from './blocks/Quiz/Quiz';
import EmployeeSearch from './pages/EmployeeSearch';
import EmployeeProfile from './pages/EmployeeProfile';
function App() {
  const [isLoggedin, setLoggedin] = React.useState(false);
  const [currentEmployee, setCurrentEmployee] = React.useState({});
  const [selectedProfile, setSelectedProfile] = React.useState({});
  const navigate = useNavigate();
  function submitForm(e) {
    setLoggedin(true);
    navigate('/profile');
  }

  const PageTransition = (props) => {
    return (
      <motion.div
        {...props}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%', ease: 'easeInOut' }}
        transition={{ type: 'spring', duration: .6 }}
      >
        {props.children}
      </motion.div>
    )
  }

  const AuthPage = (props) => {
    return (
      <>
        <Header isLoggedin={false} />
        <PageTransition>
          <Auth onClick={submitForm} />
        </PageTransition>
      </>
    )
  }

  const ProfilePage = ({ setCurrentEmployee }) => {
    return (
      <>
        <Header isLoggedin={true} />
        <PageTransition>
          <Profile onRateItemClick={setSelectedProfile} />
        </PageTransition>
      </>
    )
  }

  const YourScorePage = (props) => {
    return (
      <>
        <Header isLoggedin={true} />
        <PageTransition>
          <Result />
        </PageTransition>
      </>
    )
  }

  const QuizPage = (props) => {
    return (
      <>
        <Header isLoggedin={true} />
        <PageTransition>
          <Quiz />
        </PageTransition>
      </>
    )
  }

  const SearchPage = (props) => {
    return (
      <>
        <Header isLoggedin={true} />
        <PageTransition>
          <EmployeeSearch />
        </PageTransition>
      </>
    )
  }

  const EmployeeProfilePage = (props) => {
    return (
      <>
        <Header isLoggedin={true} />
        <PageTransition>
          <EmployeeProfile user={selectedProfile} />
        </PageTransition>
      </>
    )
  }

  const AnimatedRoutes = () => {
    const location = useLocation();
    return (
      <AnimatePresence>
        <div className="App">
          <Routes location={location}>
            <Route path='/sign-in' element={<AuthPage />} />
            <Route path='/profile' element={<ProfilePage setCurrentEmployee={setCurrentEmployee} />} />
            <Route path="*" element={<Navigate to={isLoggedin ? "/profile" : "/sign-in"} />} />
            <Route
              path='/your-score/1'
              element={<YourScorePage />}
            />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/employee-search' element={<SearchPage />} />
            <Route path='/employee-profile' element={<EmployeeProfilePage />} />
          </Routes>
        </div>
      </AnimatePresence>
    );
  }

  return (<AnimatedRoutes />)

}

export default App;
