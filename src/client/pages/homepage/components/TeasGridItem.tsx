import { Tea } from './TeasGrid';
import { API_URL } from '../../../config';
import { postFormToServer } from '../../../utils/fetchPostForms';

interface StateProps {
  tea: Tea;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
}

const TeasGridItem = (props: StateProps) => {
  const { tea, setCartQuantity, cartQuantity } = props;
  const { product } = tea;

  const handleClick = async (): Promise<void> => {
    const user = JSON.parse(localStorage.getItem('user') || '{}'); //if null then give empty object as string to parse
    console.log(user);
    if (user === {}) return; // if there is no user then do nothing
    const result = await postFormToServer(API_URL.ORDERPRODUCTS, { productId: product.id, orderId: user.order[user.order.length - 1].id });
    setCartQuantity(cartQuantity + 1);
    console.log('added to cart', result);
  };

  return (
    <div className="tea-tile">
      <div className="tea-tile-inner">
        <div className="tea-tile-img-container" style={{ backgroundImage: `url(${tea.imgUrl})` }}>
          <div className="tea-tile-name">
            <span>{tea.name}</span>
          </div>
        </div>
        <div className="tea-tile-info">
          <div className="tea-info">
            <span className="tea-tile-name">{tea.name}</span>
            <span>{tea.description}</span>
            <span>Type: {tea.type}</span>
            <span>Origin: {tea.origin}</span>
            <span>Brew Time: {tea.brewTime} mins</span>
            <span>Temperature: {tea.temperature}C</span>
            <button className="carousel-btn" onClick={handleClick}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeasGridItem;
