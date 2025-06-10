import { Link } from 'react-router-dom';
import css from './HomeTab.module.css';

const HomeTab = () => {
  return (
    <div className={css.homeTabContainer}>
      <Link to="/catalog" className={css.mainBtn}>
        View Catalog
      </Link>
      <p className={css.description}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <h1 className={css.moto}>Find your perfect rental car</h1>
    </div>
  );
};
export default HomeTab;
