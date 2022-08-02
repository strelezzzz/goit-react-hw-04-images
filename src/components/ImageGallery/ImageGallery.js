import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
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

export default ImageGallery;
