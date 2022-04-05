import TeasSearch from './TeasSearch';
import TeasGridItem from './TeasGridItem';

const TeasGrid = () => {
  return (
    <div className="teas-grid">
      <TeasSearch />
      <div className="grid">
        <TeasGridItem />
        <TeasGridItem />
        <TeasGridItem />
        <TeasGridItem />
        <TeasGridItem />
        <TeasGridItem />
      </div>
    </div>
  );
};

export default TeasGrid;
