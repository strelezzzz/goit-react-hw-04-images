import React, { Component } from 'react';
import Searchbar from './Searchbar';
import api from 'services/ApiService';
import ImageGallery from './ImageGallery';

// Your API key: 28923087-7732e16692c74d8b4e971a55b

//            id - унікальний ідентифікатор
//  webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

export default class App extends Component {
  state = {
    search: '',
    pictures: [],
    error: null,
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.search;
    const nextName = this.state.search;
    // const prevPage = prevState.page;
    // const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ loading: true });
      api
        .fetchItems(nextName, this.state.page)
        .then(pictures => this.setState({ pictures }))
        .then(({ pictures: { hits } }) => console.log({ hits }))

        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = search => {
    this.setState({ search });
  };

  render() {
    const { pictures } = this.state.pictures;

    return (
      <div style={{ maxWidth: 1170, padding: 10 }}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {pictures && <ImageGallery items={pictures.hits} />}
        {!pictures && <p>Щось пішло не так</p>}
        {this.state.loading && <h1>Loading</h1>}
      </div>
    );
  }
}
