import TeasSearch from './TeasSearch';
import TeasGridItem from './TeasGridItem';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';

export interface Tea {
  id: number;
  imgUrl: string;
  isOutOfStock: boolean;
  name: string;
  description: string;
  type: string;
  amountInStock: number;
  origin: string;
  brewTime: number;
  temperature: number;
  product: {
    id: number;
    price: number;
    teaId: number;
  };
}

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
}

const TeasGrid = (props: StateProps) => {
  const [teas, setTeas] = useState<Tea[]>([]);
  const { setCartQuantity, cartQuantity } = props;

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
    <div className="teas-grid">
      <TeasSearch />
      <div className="grid">
        {teas.map((tea: Tea, index: number) => (
          <TeasGridItem key={index} tea={tea} setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} />
        ))}
      </div>
    </div>
  );
};

export default TeasGrid;
