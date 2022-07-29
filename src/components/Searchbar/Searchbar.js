import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

const URL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

// Your API key: 28923087-7732e16692c74d8b4e971a55b

//            id - унікальний ідентифікатор
//  webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

// приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.

class Searchbar extends Component {
  state = {
    searchInput: '',
  };

  handleChangeInput = event => {
    this.setState({ searchInput: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchInput.trim() === '') {
      alert('Введіть запит');
    }
    this.props.onSubmit(this.state.searchInput);
    this.setState({ searchInput: '' });
  };

  onSubmit = () => {};
  render() {
    return (
      <header className="searchbar">
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchForm__button}>
            <span className={css.searchForm__button_label}>
              <ImSearch style={{ marginRight: 10 }} />
            </span>
          </button>

          <input
            className={css.searchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
            value={this.state.searchInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
