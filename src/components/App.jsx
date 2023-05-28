import { fetchImages} from '../Api';
import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export default function App () {

  const [images, setImages] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);


  const handleOnSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);
    setImages([]);
    setPage(1);
    fetchImagesWithQuery(searchQuery, 1);
    };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    fetchImagesWithQuery(searchQuery, nextPage);
  };

  const fetchImagesWithQuery = (searchQuery, page) => {
    fetchImages(searchQuery, page)
      .then((images) => {
        setImages((prevState) => [...prevState, ...images]);
        setPage(page);
      })
      .catch((error) => {
        setError(`${error}`);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

   const handleOnChange = event => {
     setSearchQuery(event.currentTarget.value);
  };
  
 const handleOnImageClick = (event, selectedImage) => {
   setIsShowModal(true);
   setSelectedImage(selectedImage);
  };

const handleCloseModal = () => {
  setIsShowModal(false);
  setSelectedImage(null);
};

    return (
      <>
        <Searchbar onSubmit={handleOnSubmit} onChange={handleOnChange}></Searchbar>
        {isLoading ? (<Loader></Loader>) : (<ImageGallery images={images} onImageClick={handleOnImageClick}></ImageGallery>)}
        {images.length >= 12 && !isLoading && (<Button onClick={handleLoadMore} />)}
        {images.length === 0 && !isLoading && (<p>No images found. Try another search query.</p>)}
        {isShowModal && <Modal selectedImage={selectedImage} onClick={handleCloseModal} ></Modal>}
      </>  
    )
  }