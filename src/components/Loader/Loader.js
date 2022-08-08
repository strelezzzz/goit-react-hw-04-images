// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми.
// Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення.Якщо масив зображень порожній, кнопка не рендериться.
import React from 'react';

import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        // wrapperStyle
      />
    </div>
  );
};

export default Loader;
