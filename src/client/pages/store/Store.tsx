import StoreSearch from './components/StoreSearch';
import StoreTileContainer from './components/StoreTileContainer';
const Store = () => {
  return (
    <div className="store">
      <div className="store-leftbar">filters</div>
      <div className="store-main">
        <StoreSearch />
        <StoreTileContainer />
      </div>
    </div>
  );
};

export default Store;
