import React, { Component } from 'react';
import Searchbar from './Searchbar';

export default class App extends Component {
  state = {
    searchInput: '',
  };

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
