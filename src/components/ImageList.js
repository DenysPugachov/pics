import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {

  const imagesArr = images.map(image => {
    return (
      <ImageCard key={ image.id } image={ image } />
    );
  });
  return <div className="image-list">{ imagesArr }</div>;

};

export default ImageList;