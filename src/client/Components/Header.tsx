import '../styles/header.css';
import { Link } from 'react-router-dom';

interface StateProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = (props: StateProps) => {
  const { setShowRegisterForm, setShowLoginForm } = props;

  const handleClickRegister = (): void => {
    setShowRegisterForm(true);
  };

  const handleClickLogin = (): void => {
    setShowLoginForm(true);
  };

  return (
    <header className="header">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src="/images/logo.png" alt="logo" />
      </div>
      <nav className="navbar">
        <ul className="navbar-list">
          <Link className="navbar-item" to={'/'}>
            <li>Home</li>
          </Link>
          <Link className="navbar-item" to={'/aboutus'}>
            <li>About us</li>
          </Link>
          <Link className="navbar-item" to={'/store'}>
            <li>Store</li>
          </Link>
        </ul>
        <ul className="navbar-register-login-cart">
          <li className="navbar-item navbar-register-login-text" onClick={handleClickRegister}>
            Register
          </li>
          <li className="navbar-item navbar-register-login-text" onClick={handleClickLogin}>
            Login
          </li>
          <Link className="navbar-item-cart" to={'/cart'}>
            <li>
              <img src="/images/cart.png" className="navbar-cart" alt="" />
              <span className="cart-number">1</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
