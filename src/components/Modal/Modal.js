import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, largeImageURL }) => {
  //вішаємо слухача при маунті , і знімаємо після івенту за допомогою хука
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  //приймає івент з кодом ескейп, та закриває модалку;
  const closeModal = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };
  //приймає івент при кліку на бекдроп, та закриває модалку
  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={onBackdropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
// // ==========================
// export default class Modal extends Component {
//   static propTypes = {
//     largeImageURL: PropTypes.string.isRequired,
//     onClose: PropTypes.func,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.closeModal);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.closeModal);
//   }

//   closeModal = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   onBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props;
//     return createPortal(
//       <div className={css.overlay} onClick={this.onBackdropClick}>
//         <div className={css.modal}>
//           <img src={largeImageURL} alt="" />
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }
