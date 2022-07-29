function fetchItems(searchInput, page) {
  const API_KEY = '28923087-7732e16692c74d8b4e971a55b';
  return fetch(
    `https://pixabay.com/api/?q=${searchInput}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response) {
      return response.json();
    }
    return Promise.reject(new Error(`Немає картинок за таким запитом`));
  });
}

const api = {
  fetchItems,
};

export default api;
