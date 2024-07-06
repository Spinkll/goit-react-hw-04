import React from "react";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => (
  <div className={css.card} onClick={() => onClick(image)}>
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={css.image}
    />
    <div className={css.info}>
      <p>{image.user.name}</p>
      <p>{image.likes} likes</p>
    </div>
  </div>
);

export default ImageCard;
