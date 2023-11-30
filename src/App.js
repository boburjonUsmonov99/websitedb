import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import About from './components/about/about';
import Founders from './components/founders/founders';
import Footer from './components/footer/footer';
import SignInPage from './components/signin/signin';
import DriversDashboard from './components/trucker/trucker';
import ClientsDashboard from './components/client/client';
import SignUpPage from './components/signup/signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageComponents />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="trucker" element={<DriversDashboard />} />
          <Route path="client" element={<ClientsDashboard />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Layout component that includes Header and Footer
function Layout() {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  );
}

// Component grouping the homepage specific components
function HomePageComponents() {
  return (
    <>
      <Main />
      <About />
      <Founders />
    </>
  );
}

export default App;
