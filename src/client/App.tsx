import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/globalForms/Register';
import login from './Components/globalForms/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="form-main">
        <Register />
      </main>
      <Footer />
    </div>
  );
}

export default App;
