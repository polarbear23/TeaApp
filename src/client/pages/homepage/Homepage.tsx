import Carousel from './components/Carousel';
import Main from './components/Main';
import Teas from './components/Teas';
const Homepage = () => {
  return (
    <main className="main">
      <div className="homepage">
        <Carousel />
        <Main />
        <Teas />
      </div>
    </main>
  );
};

export default Homepage;
