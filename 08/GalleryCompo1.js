import React from "react";
import styles from "./GalleryCompo1.module.css";

const GalleryCompo1 = ({ tour }) => {
  const gridItems = [];
  const columns = 2; 
  const rows = Math.ceil(tour.length / columns); 

  for (let i = 0; i < rows; i++) {
    const startIndex = i * columns;
    const endIndex = startIndex + columns;
    const rowItems = tour.slice(startIndex, endIndex);

    const row = (
      <div className={styles.row} key={i}>
        {rowItems.map((item) => {
          console.log(item.galTitle, item.galWebImageUrl, item.galPhotographyLocation);
          const imageUrl = item.galWebImageUrl.replace("http://", "https://");
          return (
            <div className={styles.item} key={item.galTitle}>
              <h2>{item.galTitle}</h2>
              <div>
                <img src={imageUrl} alt={item.galTitle} />
              </div>
              <p>{item.galPhotographyLocation}</p>
            </div>
          );
        })}
      </div>
    );

    gridItems.push(row);
  }

  return <div className={styles.grid}>{gridItems}</div>;
};

export default GalleryCompo1;