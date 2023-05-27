import css from 'styles.module.css';

export const Button = ({ onClick }) => (<div className={css.ButtonContainer}><button type='button' className={css.Button} onClick={onClick} >Load More</button></div>)