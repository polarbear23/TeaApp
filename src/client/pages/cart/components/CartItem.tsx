import React from 'react';
import { Product } from '../../../App';

interface StateProps {
  product: Product;
}

const CartItem = (props: StateProps) => {
  const { product } = props;
  return (
    <div>
      <span>{product.id}</span>
      <span>{product.price}</span>
    </div>
  );
};

export default CartItem;
