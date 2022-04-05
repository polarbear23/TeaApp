import { useState } from 'react';

const TeasGridItem = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="tea-tile">
      <div className="tea-tile-inner">
        <div className="tea-tile-img-container" style={{ backgroundImage: '/public/images/teas/' }}></div>
        <div className="tea-tile-info">
          <span>name</span>
          <span>type</span>
          <span>origin</span>
          <span>brewtime</span>
          <span>temp</span>
          <span>desc</span>
        </div>
      </div>
    </div>
  );
};

export default TeasGridItem;
