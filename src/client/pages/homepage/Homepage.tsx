import Carousel from './components/Carousel';
import Main from './components/Main';
import Teas from './components/Teas';
import { orderProducts } from '../cart/Cart';
import { Product } from '../../App';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<orderProducts[]>>;
  cart: orderProducts[];
}

const Homepage = (props: StateProps) => {
  const { setCartQuantity, cartQuantity, setCart, cart } = props;

  return (
    <main className="main">
      <div className="homepage">
        <Carousel />
        <Main />
        <Teas setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart} />
      </div>
    </main>
  );
};

export default Homepage;
