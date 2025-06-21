import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { resetError } from '../../redux/catalog/slice';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const dispatch = useDispatch();
  const handleResetError = () => dispatch(resetError());
  return (
    <nav className={css.navigation}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="/"
            className={buildLinkClass}
            end
            onClick={handleResetError}
          >
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="catalog"
            className={buildLinkClass}
            end
            onClick={handleResetError}
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
