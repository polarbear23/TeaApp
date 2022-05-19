import '../../styles/store.css';
import StoreSearch from './components/StoreSearch';
import StoreTileContainer from './components/StoreTileContainer';
import { orderProducts } from '../cart/Cart';
import { Product } from '../../App';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<orderProducts[]>>;
  cart: orderProducts[];
}

const Store = (props: StateProps) => {
  const { setCartQuantity, cartQuantity, setCart, cart } = props;
  return (
    <main className="store">
      <div className="store-leftbar">filters</div>
      <div className="store-main">
        <StoreSearch />
        <StoreTileContainer setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart} />
      </div>
    </main>
  );
};

export default Store;
