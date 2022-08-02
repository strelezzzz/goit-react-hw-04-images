import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      {items.map(({ webformatURL, largeImageURL, id }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={largeImageURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;

//  return (
//         const pictures = response.json();
//         const newPictures = pictures.data.hits.map(pic => {
//         return {
//           id: pic.id,
//           webformatURL: pic.webformatURL,
//           largeImageURL: pic.largeImageURL,
//           }
