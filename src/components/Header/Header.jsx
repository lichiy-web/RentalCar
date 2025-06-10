import css from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContent}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
export default Header;
