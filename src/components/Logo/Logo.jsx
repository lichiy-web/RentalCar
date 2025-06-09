import css from './Logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo}>
      <span className="logoFirstPart">Rental</span>
      <span className="logoSecondPart">Car</span>
    </div>
  );
};
export default Logo;
