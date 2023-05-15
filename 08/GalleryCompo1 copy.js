import React from "react";
const GalleryCompo1 = ({ tour }) => {
  const rows = Math.ceil(tour.length / 5); 
  const grid = [];
  
  return (
    <div>
      {tour.map((item) => {
        console.log(item.galTitle, item.galWebImageUrl, item.galPhotographyLocation);
        // Replace "http://" -> "https://" (http시 방화벽 발동)
        const imageUrl = item.galWebImageUrl.replace("http://", "https://");
        return (
          <div key={item.galTitle}>
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
};

export default GalleryCompo1;