import { Product } from '../../../App';
import { Tea } from '../../homepage/components/TeasGrid';
import { orderProducts } from '../../cart/Cart';
import { postFormToServer } from '../../../utils/fetchPostForms';
import { API_URL } from '../../../config';

interface StateProps {
  tea: Tea;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
  setCart: React.Dispatch<React.SetStateAction<orderProducts[]>>;
  cart: orderProducts[];
  product: Product;
}

const StoreTile = (props: StateProps) => {
  const { tea, setCart, cart, cartQuantity, setCartQuantity, product } = props;

  const handleClick = async (): Promise<void> => {
    if (localStorage.getItem('user') !== null) {
      const user = JSON.parse(localStorage.getItem('user') || '');
      const result = await postFormToServer(API_URL.ORDERPRODUCTS, { productId: product.id, orderId: user.order[user.order.length - 1].id });
      const newCart: orderProducts[] = [...cart, result];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCartQuantity(cartQuantity + 1);
      console.log('added to cart', result);
    }
    const newCart: orderProducts[] = [...cart, { productId: product.id, quantity: 1, product: product }];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartQuantity(cartQuantity + 1);
    console.log('added to cart', product);
    // if there is no user then do nothing
  };

  return (
    <div className="store-item-tile">
      <div className="store-item-img-section" style={{ backgroundImage: `url(${tea.imgUrl})` }}>
        <h3 className="store-tile-name">{tea.name}</h3>
      </div>
      <div className="store-item-info">
        <span>{}</span>
        <span>Type: {tea.type}</span>
        <span>Origin: {tea.origin}</span>
        <span>Price: {tea.product.price / 100}</span>
        <button onClick={handleClick}>Buy</button>
      </div>
    </div>
  );
};

export default StoreTile;
