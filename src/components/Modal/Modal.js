import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.onBackdropClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
