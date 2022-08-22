import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

// Searchbar приймає один проп onSubmit – функцію для передачі значення інпута під час сабміту форми.

const Searchbar = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  //відслідковуємо дані при вводі
  const handleChangeInput = event => {
    setSearchInput(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchInput.trim() === '') {
      return alert('Введіть запит');
    }
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchForm__button}>
          <span className={css.searchForm__button_label}>
            <ImSearch style={{ marginRight: 10 }}>Find</ImSearch>
          </span>
        </button>

        <input
          className={css.searchForm__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeInput}
          value={searchInput}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// //
// class oldSearchbar extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     searchInput: '',
//   };

//   handleChangeInput = event => {
//     this.setState({ searchInput: event.currentTarget.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.searchInput.trim() === '') {
//       return alert('Введіть запит');
//     }
//     this.props.onSubmit(this.state.searchInput);
//     this.setState({ searchInput: '' });
//   };

//   render() {
//     const { searchInput } = this.state;
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.searchForm__button}>
//             <span className={css.searchForm__button_label}>
//               <ImSearch style={{ marginRight: 10 }}>Find</ImSearch>
//             </span>
//           </button>

//           <input
//             className={css.searchForm__input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChangeInput}
//             value={searchInput}
//           />
//         </form>
//       </header>
//     );
//   }
// }

export default Searchbar;
