import React from 'react';
import css from './ImageGalleryItem.module.css';
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

const ImageGalleryItem = ({ srcProp, altProp }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={srcProp} alt={altProp} />
    </li>
  );
};

export default ImageGalleryItem;
