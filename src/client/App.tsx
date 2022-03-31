import './styles/App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homepage from './pages/homepage/Homepage';
import Register from './Components/globalForms/Register';
import Login from './Components/globalForms/Login';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <BrowserRouter>
      <div>
        {showRegisterForm && <Register setShowRegisterForm={setShowRegisterForm} />}
        {showLoginForm && <Login setShowLoginForm={setShowLoginForm} />}
        <div className="App">
          <Header setShowRegisterForm={setShowRegisterForm} setShowLoginForm={setShowLoginForm} />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
