import '../../styles/store.css';
import Teas from '../homepage/components/Teas';
import StoreSearch from './components/StoreSearch';
import { Product } from '../../App';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
}

const Store = (props: StateProps) => {
  const { setCartQuantity, cartQuantity, setCart, cart } = props;
  return (
    <main className="store">
      <div className="store-leftbar">filters</div>
      <div className="store-main">
        <StoreSearch />
        <Teas setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart} />
      </div>
    </main>
  );
};

export default Store;
