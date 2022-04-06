import { Link } from 'react-router-dom';

interface TeaProps {
  tea: {
    imgFrontUrl: string;
    isOutOfStock: boolean;
    name: string;
    description: string;
    type: string;
    amountInStock: number;
    origin: string;
    brewTime: number;
    temperature: number;
  };
}

const TeasGridItem = (props: TeaProps) => {
  const { tea } = props;
  return (
    <div className="tea-tile">
      <div className="tea-tile-inner">
        <div className="tea-tile-img-container" style={{ backgroundImage: `url(${tea.imgFrontUrl})` }}>
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
            <Link to="/">
              <button className="carousel-btn">Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeasGridItem;
