import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

const ImageGallery = ({ query }) => {
  return (
    <ul className={css.gallery}>
      {query.map(({ webformatURL, largeImageURL, id }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={largeImageURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
