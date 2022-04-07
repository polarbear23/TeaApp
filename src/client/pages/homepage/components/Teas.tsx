import TeasGrid from './TeasGrid';
import '../../../styles/homepageTeas.css';

interface StateProps {
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
  cartQuantity: number;
}

const Teas = (props: StateProps) => {
  const { setCartQuantity, cartQuantity } = props;

  return (
    <section className="teas">
      <h3 className="section-title">Teas</h3>
      <TeasGrid setCartQuantity={setCartQuantity} cartQuantity={cartQuantity} />
    </section>
  );
};

export default Teas;
