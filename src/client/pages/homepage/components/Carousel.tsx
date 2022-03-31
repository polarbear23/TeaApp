import '../../../styles/carousel.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateItem(activeItem + 1);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeItem]);

  const maxNumberOfCarouselItems: number = 5;
  const updateItem = (newItem: number): void => {
    if (newItem < 0) {
      newItem = maxNumberOfCarouselItems - 1;
    } else if (newItem >= maxNumberOfCarouselItems) {
      newItem = 0;
    }
    setActiveItem(newItem);
  };

  return (
    <section className="homepage-carousel">
      <div className="inner" style={{ transform: `translateX(-${activeItem * 100}%)` }}>
        <div className="carousel-item tree" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/treeteas.gif" alt="teacup with trees inside" />
          <h2 className="carousel-title">Our tea is sustainable</h2>
          <h3 className="carousel-subtitle">... and 100% organic</h3>
          <Link to={'/aboutus'}>
            <button>Check out our sustainability Policy</button>
          </Link>
        </div>
        <div className="carousel-item mountain" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="/images/mountaintea.gif" alt="teacup with mountains inside" />
          <h2 className="carousel-title">Farmed in small batches</h2>
          <h3 className="carousel-subtitle">...from the mountains</h3>
        </div>
        <div className="carousel-item desert" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/deserttea.gif" alt="teacup with desert cacti inside" />
          <h2 className="carousel-title">...to the Deserts</h2>
        </div>
        <div className="carousel-item desert" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/beachtea.gif" alt="teacup with ship inside" />
          <h2 className="carousel-title">Shipped from all around the world</h2>
        </div>
        <div className="carousel-item mountain" style={{ width: '100%' }}>
          <img className="carousel-item-image" src="images/hometea.gif" alt="teacup with house inside" />
          <h2 className="carousel-title">We bring the most unique teas</h2>
          <h3 className="carousel-subtitle">...right to your home</h3>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
