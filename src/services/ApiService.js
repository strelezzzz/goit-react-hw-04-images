async function fetchItems(searchInput, page) {
  const API_KEY = '28923087-7732e16692c74d8b4e971a55b';
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchInput}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response) {
    const pictures = await response.json();
    const images = await pictures.hits.map(item => {
      return {
        id: item.id,
        largeImageURL: item.largeImageURL,
        webformatURL: item.webformatURL,
      };
    });
    return images;
  }
  return await Promise.reject(new Error(`Немає картинок за таким запитом`));
}

const api = {
  fetchItems,
};

export default api;

// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();
