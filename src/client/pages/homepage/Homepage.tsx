import Carousel from './components/Carousel';
import Main from './components/Main';
const Homepage = () => {
  return (
    <main className="main">
      <div className="homepage">
        <Carousel />
        <Main></Main>
        <section>teas</section>
      </div>
    </main>
  );
};

export default Homepage;
