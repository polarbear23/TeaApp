const StoreTile = () => {
  return (
    <div className="store-item-tile">
      <div className="store-item-info">
        <h3 className="store-tile-name">{}</h3>
        <span>{}</span>
        <span>Type: {}</span>
        <span>Origin: {}</span>
        <span>Brew Time: {} mins</span>
        <span>Temperature: {}C</span>
        <span>Price:</span>
      </div>
    </div>
  );
};

export default StoreTile;
