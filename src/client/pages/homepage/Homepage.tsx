import Carousel from './components/Carousel';
import Main from './components/Main';
import Teas from './components/Teas';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
}

const Homepage = (props: StateProps) => {
  const { setCartQuantity, cartQuantity } = props;

  return (
    <main className="main">
      <div className="homepage">
        <Carousel />
        <Main />
        <Teas setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} />
      </div>
    </main>
  );
};

export default Homepage;
