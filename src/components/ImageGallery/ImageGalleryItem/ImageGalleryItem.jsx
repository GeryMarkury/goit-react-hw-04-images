import css from '../../../styles.module.css';

export const ImageGalleryItem = ({url, urlLarge, onClick}) => (<li className={css.ImageGalleryItem}>
  <img src={url} alt="" className={css.ImageGalleryItemImg} onClick={onClick} />
</li>)