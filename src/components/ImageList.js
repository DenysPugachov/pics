import React from "react";

const ImageList = ({ images }) => {

  const imagesArr = images.map(({ id, urls, alt_description }) => {
    return (
      <img key={ id } src={ urls.regular } alt={ alt_description } />
    );
  });
  return <div>{ imagesArr }</div>;

};

export default ImageList;