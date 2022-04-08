import '../../styles/store.css';
import StoreSearch from './components/StoreSearch';
import StoreTileContainer from './components/StoreTileContainer';
const Store = () => {
  return (
    <main className="store">
      <div className="store-leftbar">filters</div>
      <div className="store-main">
        <StoreSearch />
        <StoreTileContainer />
      </div>
    </main>
  );
};

export default Store;
