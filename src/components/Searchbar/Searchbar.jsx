import css from 'styles.module.css';

export const Searchbar = ({ onSubmit, onChange }) => (
<header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={onSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={onChange}
    />
  </form>
</header>
)