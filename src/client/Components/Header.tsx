import '../styles/header.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { API_URL } from '../config';
interface StateProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
  cartQuantity: number;
}

const Header = (props: StateProps) => {
  const { setShowRegisterForm, setShowLoginForm, cartQuantity } = props;

  const handleClickRegister = (): void => {
    setShowRegisterForm(true);
  };

  const handleClickLogin = (): void => {
    setShowLoginForm(true);
  };

  useEffect(() => {
    const getOrders = async () => {
      const res = await fetch(API_URL.ORDER);
      const result = res.json();
    };
    getOrders();
  }, []);

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
              <span className="cart-number">{cartQuantity === 0 ? '' : cartQuantity}</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
