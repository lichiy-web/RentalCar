import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo}>
      <svg className={css.logoSvg} fill="none" viewBox="0 0 104 16">
        <use href="/sprite.svg#logo"></use>
      </svg>
    </div>
  );
};
export default Logo;
