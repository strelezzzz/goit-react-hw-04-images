import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import api from 'services/ApiService';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal/Modal';
import css from './App.module.css';
import Loader from './Loader';

// Your API key: 28923087-7732e16692c74d8b4e971a55b

//            id - унікальний ідентифікатор
//  webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

const App = () => {
  const [search, setSearch] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  //
  const handleChangePage = () => {
    setPage(prevState => prevState + 1);
  };
  //
  const handleFormSubmit = search => {
    setSearch(search);
    setPage(1);
    setPictures([]);
  };
  //
  const openModal = event => {
    setShowModal(true);
    setLargeImageURL(event);
  };

  //
  const closeModal = () => {
    setShowModal(!showModal);
  };
  //
  useEffect(() => {
    if (!search) return;

    setLoading(true);
    setPage(page);

    api
      .fetchItems(search, page)
      .then(data => setPictures(prevState => [...prevState, ...data.hits]))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [search, page]);

  return (
    <div className={css.app} style={{ maxWidth: 1170, padding: 10 }}>
      <Searchbar onSubmit={handleFormSubmit} />
      {pictures.length > 0 && (
        <ImageGallery items={pictures} openModal={openModal} />
      )}
      {error && <p>Ой, щось пішло не так: {error.message}</p>}
      {pictures.length === 0 && search && <p>Try Again</p>}
      {loading && <Loader />}
      {pictures.length !== 0 && pictures.length % 12 === 0 && (
        <Button nextPage={handleChangePage} />
      )}
      {showModal && (
        <Modal onClose={() => closeModal()} largeImageURL={largeImageURL} />
      )}
    </div>
  );
};
//
// class oldApp extends Component {
//   state = {
//     search: null,
//     pictures: [],
//     error: null,
//     page: 1,
//     loading: false,
//     showModal: false,
//     largeImageURL: null,
//   };

// componentDidUpdate(prevProps, prevState) {
//   const prevName = prevState.search;
//   const nextName = this.state.search;
//   const prevPage = prevState.page;
//   const page = this.state.page;

//   if (prevName !== nextName) {
//     this.setState({ loading: true, page: 1 });
//     api
//       .fetchItems(nextName, page)
//       .then(data => this.setState({ pictures: data.hits }))

//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ loading: false }));
//   }
//   if (prevPage !== page && page !== 1) {
//     this.setState({ loading: true });
//     api
//       .fetchItems(nextName, page)
//       .then(data => {
//         this.setState(prevState => ({
//           pictures: [...prevState.pictures, ...data.hits],
//         }));
//       })
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ loading: false }));
//   }
// }

// handleChangePage = () => {
//   this.setState(prevState => ({ page: prevState.page + 1 }));
// };

// handleFormSubmit = search => {
//   this.setState({ search });
//   this.setState({ page: 1, pictures: [] });
// };

// openModal = event => {
//   this.setState({ showModal: true });
//   this.setState({ largeImageURL: event });
// };

// closeModal = () => {
//   this.setState(({ showModal }) => ({ showModal: !showModal }));
// };

//   render() {
//     const { pictures, error, loading, showModal, largeImageURL, search } =
//       this.state;

//     return (
//       <div className={css.app} style={{ maxWidth: 1170, padding: 10 }}>
//         <Searchbar onSubmit={this.handleFormSubmit} />
//         {pictures.length > 0 && (
//           <ImageGallery items={pictures} openModal={this.openModal} />
//         )}
//         {error && <p>Ой, щось пішло не так: {error.message}</p>}
//         {pictures.length === 0 && search && <p>Try Again</p>}
//         {loading && <Loader />}
//         {pictures.length !== 0 && pictures.length % 12 === 0 && (
//           <Button nextPage={this.handleChangePage} />
//         )}
//         {showModal && (
//           <Modal
//             onClose={() => this.closeModal()}
//             largeImageURL={largeImageURL}
//           />
//         )}
//       </div>
//     );
//   }
// }

export default App;
// {
//   "search": "cat",
//   "hits": [
//     {
//       "id": 736877,
//       "pageURL": "https://pixabay.com/photos/tree-cat-silhouette-moon-full-moon-736877/",
//       "type": "photo",
//       "tags": "tree, cat, silhouette",
//       "previewURL": "https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg",
//       "previewWidth": 150,
//       "previewHeight": 100,
//       "webformatURL": "https://pixabay.com/get/g73b560a5174b2523a6bd604699a8b9967dd753a0645c39e9f70897a10f1bcb873b93a812459e9bd7123aa561f881da4a_640.jpg",
//       "webformatWidth": 640,
//       "webformatHeight": 427,
//       "largeImageURL": "https://pixabay.com/get/g6db7207d46d00d244c5e4ebb9712dbd02b8e3830f83389ed5585d92ba04f5e776515030ea36b5a3cdcc154ea7ce0a493d659a1630a1148eec005ea0df323a45f_1280.jpg",
//       "imageWidth": 1920,
//       "imageHeight": 1282,
//       "imageSize": 97150,
//       "views": 984153,
//       "downloads": 475168,
//       "collections": 2082,
//       "likes": 2535,
//       "comments": 481,
//       "user_id": 909086,
//       "user": "Bessi",
//       "userImageURL": "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg"
//     },
//     "{collections: 1887, comments: 320, downloads: 53033…}",
//     {
//       "id": 3106213,
//       "pageURL": "https://pixabay.com/photos/nature-wildlife-white-bengal-tiger-3106213/",
//       "type": "photo",
//       "tags": "nature, wildlife, white bengal tiger",
//       "previewURL": "https://cdn.pixabay.com/photo/2018/01/25/14/12/nature-3106213_150.jpg",
//       "previewWidth": 150,
//       "previewHeight": 99,
//       "webformatURL": "https://pixabay.com/get/g6d51dc672adc6186effca850137f495eead3dbb08d7077c6c33e7d3f587c0d46d5ef92200ca489c55cc6ae89e4a43958ebb39091f9203b66cc85698ab914832e_640.jpg",
//       "webformatWidth": 640,
//       "webformatHeight": 426,
//       "largeImageURL": "https://pixabay.com/get/g1a6aa76243ea906044f88d4ca1d76f529d6787c0a8cd0ab33a509fa8eedfb378d67324158793cb55a252c2398fd984470173591f721a93af0177147b7e456176_1280.jpg",
//       "imageWidth": 5472,
//       "imageHeight": 3648,
//       "imageSize": 4037947,
//       "views": 1325483,
//       "downloads": 810932,
//       "collections": 1647,
//       "likes": 2065,
//       "comments": 260,
//       "user_id": 1546275,
//       "user": "SarahRichterArt",
//       "userImageURL": "https://cdn.pixabay.com/user/2016/04/25/20-19-38-614_250x250.jpg"
//     },
//     "{collections: 1485, comments: 379, downloads: 41737…}",
//     "{collections: 1376, comments: 300, downloads: 36610…}",
//     "{collections: 1533, comments: 194, downloads: 43316…}",
//     "{collections: 1509, comments: 233, downloads: 39381…}",
//     "{collections: 1448, comments: 210, downloads: 57282…}",
//     "{collections: 1288, comments: 275, downloads: 29519…}",
//     "{collections: 2437, comments: 60, downloads: 77620,…}",
//     "{collections: 2098, comments: 132, downloads: 17098…}",
//     "{collections: 1261, comments: 202, downloads: 29122…}"
//   ],
//   "error": null,
//   "page": 1,
//   "loading": false,
//   "total": 22265,
//   "totalHits": 500
// }
