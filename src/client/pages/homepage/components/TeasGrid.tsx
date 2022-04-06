import TeasSearch from './TeasSearch';
import TeasGridItem from './TeasGridItem';
import { useEffect, useState } from 'react';
import { API_URL } from '../../../config';

interface Tea {
  imgUrl: string;
  isOutOfStock: boolean;
  name: string;
  description: string;
  type: string;
  amountInStock: number;
  origin: string;
  brewTime: number;
  temperature: number;
}

const TeasGrid = () => {
  const [teas, setTeas] = useState<Tea[]>([]);
  useEffect(() => {
    const fetchTea = async () => {
      const res = await fetch(API_URL.TEA);
      const result = await res.json();
      setTeas(result.data);
    };

    fetchTea();
  }, []);

  return (
    <div className="teas-grid">
      <TeasSearch />
      <div className="grid">
        {teas.map((tea) => (
          <TeasGridItem tea={tea} />
        ))}
      </div>
    </div>
  );
};

export default TeasGrid;
