import StoreTile from './StoreTile';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';
import { Tea } from '../../homepage/components/TeasGrid';
import { Product } from '../../../App';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: Product[];
}

const StoreTileContainer = (props: StateProps) => {
  const { cartQuantity, setCartQuantity, cart, setCart } = props;
  const [teas, setTeas] = useState([]);
  useEffect(() => {
    const fetchTea = async () => {
      const res = await fetch(API_URL.TEA);
      const result = await res.json();
      console.log('tea', result.data);
      setTeas(result.data);
    };
    fetchTea();
  }, []);
  return (
    <div className="store-tile-container">
      {teas.map((tea: Tea) => (
        <StoreTile tea={tea} product={tea.product} setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} setCart={setCart} cart={cart}></StoreTile>
      ))}
    </div>
  );
};

export default StoreTileContainer;
