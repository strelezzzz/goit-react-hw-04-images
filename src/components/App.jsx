import React, { Component } from 'react';
import Searchbar from './Searchbar';
import api from 'services/ApiService';

// Your API key: 28923087-7732e16692c74d8b4e971a55b

//            id - унікальний ідентифікатор
//  webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

export default class App extends Component {
  state = {
    searchInput: '',
    query: null,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchInput;
    const nextName = this.props.searchInput;

    if (prevName !== nextName) {
      api
        .fetchItems(nextName)
        .then(searchInput => this.setState({ searchInput }))
        .catch(error => this.setState({ error }));
    }
  }

  handleFormSubmit = searchInput => {
    this.setState({ searchInput });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, padding: 10 }}>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
