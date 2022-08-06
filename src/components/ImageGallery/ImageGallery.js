import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(({ webformatURL, largeImageURL, id }) => (
        <ImageGalleryItem
          key={id}
          srcProp={webformatURL}
          altProp={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};
export default ImageGallery;
