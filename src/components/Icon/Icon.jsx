import css from './Icon.module.css';

export const MapPointerIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 12 15">
        <use href="/sprite.svg#icon-map-pointer"></use>
      </svg>
    </div>
  );
};

export const CheckCircleIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 16 16">
        <use href="/sprite.svg#icon-check-circle"></use>
      </svg>
    </div>
  );
};

export const CalendarIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 16 16">
        <use href="/sprite.svg#icon-calendar"></use>
      </svg>
    </div>
  );
};

export const CarIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 16 12">
        <use href="/sprite.svg#icon-car"></use>
      </svg>
    </div>
  );
};

export const FuelPumpIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 16 16">
        <use href="/sprite.svg#icon-fuel-pump"></use>
      </svg>
    </div>
  );
};

export const GearIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 16 16">
        <use href="/sprite.svg#icon-gear"></use>
      </svg>
    </div>
  );
};

export const FavoriteIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 16 15">
        <use href="/sprite.svg#icon-favorite"></use>
      </svg>
    </div>
  );
};

export const FavoriteCheckedIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 16 15">
        <use href="/sprite.svg#icon-favorite-checked"></use>
      </svg>
    </div>
  );
};

export const ArrowDownIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 13 7">
        <use href="/sprite.svg#icon-arrow-down"></use>
      </svg>
    </div>
  );
};

export const ArrowUpIcon = props => {
  return (
    <div className={css.iconContainer} {...props}>
      <svg className={css.iconSvg} fill="none" viewBox="0 0 13 7">
        <use href="/sprite.svg#icon-arrow-up"></use>
      </svg>
    </div>
  );
};

const Icon = ({ type, ...props }) => {
  switch (type) {
    case 'MapPointer':
      return <MapPointerIcon {...props} />;
    case 'CheckCircl':
      return <CheckCircleIcon {...props} />;
    case 'Calendar':
      return <CalendarIcon {...props} />;
    case 'Car':
      return <CarIcon {...props} />;
    case 'Gear':
      return <GearIcon {...props} />;
    case 'Favorite':
      return <FavoriteIcon {...props} />;
    case 'FavoriteChecked':
      return <FavoriteCheckedIcon {...props} />;
    case 'ArrowDown':
      return <ArrowDownIcon {...props} />;
    case 'ArrowUp':
      return <ArrowUpIcon {...props} />;
  }
};

export default Icon;
