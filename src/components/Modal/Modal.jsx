import { useEffect } from 'react';
import css from 'styles.module.css';

export default function Modal({ selectedImage, onClick }) {
	useEffect(() => {
    const handlePressESC = (e) => {
      if (e.code === 'Escape') onClick();
    };

    document.addEventListener('keydown', handlePressESC);

    return () => {
      document.removeEventListener('keydown', handlePressESC);
    };
  }, [onClick]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleOverlayClick}>
      <div className={css.Modal}>
        <img src={selectedImage} alt="" />
      </div>
    </div>
  );
}
