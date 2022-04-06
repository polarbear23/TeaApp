import TeasSearch from './TeasSearch';
import TeasGridItem from './TeasGridItem';
import { teas } from '../../../../server/utils/data';
const TeasGrid = () => {
  return (
    <div className="teas-grid">
      <TeasSearch />
      <div className="grid">
        {teas.map((tea) => (
          <TeasGridItem tea={tea} />
        ))}
      </div>
    </div>
  );
};

export default TeasGrid;
