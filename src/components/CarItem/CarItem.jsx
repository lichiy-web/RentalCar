import clsx from 'clsx';
import css from './CarItem.module.css';
import { Link } from 'react-router-dom';
import FavoriteChevron from '../FavoriteChevron/FavoriteChevron';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/app/selectors';
import { toggleFavoriteCar } from '../../redux/app/slice';
import { mileageFormat, parseAddress } from '../../utilits/utilits';

const CarItem = ({ car }) => {
  const favoriteCars = useSelector(selectFavorite);
  const dispatch = useDispatch();
  if (!car) return;
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;
  const { city, country } = parseAddress(address);
  const formatedMileage = mileageFormat(mileage);

  const isFavorite = favoriteCars.includes(id);
  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteCar(id));
  };

  return (
    <li className={css.carItemContainer}>
      <FavoriteChevron
        onClick={handleToggleFavorite}
        isFavorite={isFavorite}
        className={css.favoriteChevronContainer}
      />
      <img src={img} alt="Car Photo" className={css.carImg} />
      <div className={css.mainInfo}>
        <p className={clsx(css.mainInfoItem, css.modelInfo)}>
          <span className={clsx(css.modelInfoItem, css.brand)}>
            {brand + ' '}
          </span>
          <span className={clsx(css.modelInfoItem, css.model)}>{model}</span>,
          <span className={clsx(css.modelInfoItem, css.year)}>
            {' ' + year}
          </span>
        </p>
        <p className={clsx(css.mainInfoItem, css.rentalPrice)}>
          {'$' + rentalPrice}
        </p>
      </div>
      <p className={clsx(css.secondaryInfo, css.locationInfo)}>
        <span>{city}</span>
        <span>{country}</span>
        <span>{rentalCompany}</span>
      </p>
      <p className={clsx(css.secondaryInfo, css.techInfo)}>
        <span>{type}</span>
        <span>{formatedMileage}</span>
      </p>
      <Link to={`/catalog/${id}`} className={css.readMoreBtn}>
        Read more
      </Link>
    </li>
  );
};
export default CarItem;
