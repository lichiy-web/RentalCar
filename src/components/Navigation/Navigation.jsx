import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink to="/" className={buildLinkClass} end>
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink to="catalog" className={buildLinkClass} end>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
