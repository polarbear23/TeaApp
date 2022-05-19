import CartItem from './components/CartItem';
import { useEffect } from 'react';
import { Product } from '../../App';
import { API_URL } from '../../config';

export interface orderProducts {
  orderId?: number;
  product: Product;
  productId: number;
  quantity: number;
}

interface StateProps {
  setCart: React.Dispatch<React.SetStateAction<orderProducts[]>>;
  cart: orderProducts[];
}

const Cart = (props: StateProps) => {
  const { setCart, cart } = props;
  useEffect(() => {
    const getOrder = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      const res = await fetch(API_URL.ORDER, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      });
      const result = await res.json();
      const currentOrder = result.data[result.data.length - 1];
      if (!currentOrder.orderProducts.length) {
        const newCart = JSON.parse(localStorage.getItem('cart') || '{}');
        setCart(newCart);
      } else if (currentOrder.orderProducts.length) {
        const newCart = currentOrder.orderProducts;
        console.log(newCart);
        setCart(newCart);
      }
    };
    getOrder();
  }, []);

  return (
    <main className="main">
      <div className="cart-items-container">
        {cart.map((orderProduct) => {
          return <CartItem product={orderProduct.product} />;
        })}
      </div>
    </main>
  );
};

export default Cart;
