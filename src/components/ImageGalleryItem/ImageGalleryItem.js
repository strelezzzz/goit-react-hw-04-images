import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

const ImageGalleryItem = ({ srcProp, altProp, openModal }) => {
  return (
    <li className={css.imageGalleryItem}>
      <img
        className="imageGalleryItem__image"
        src={srcProp}
        alt={altProp}
        onClick={() => openModal(altProp)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  srcProp: PropTypes.string.isRequired,
  altProp: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
