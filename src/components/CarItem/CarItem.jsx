import clsx from 'clsx';
import css from './CarItem.module.css';
import { Link } from 'react-router-dom';

const CarItem = ({ car }) => {
  if (!car) return;
  console.log('In CarItem: ', car);
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    // description,
    // fuelConsumption,
    // engineSize,
    // accessories,
    // functionalities,
    rentalPrice,
    rentalCompany,
    address,
    // rentalConditions,
    mileage,
  } = car;
  // eslint-disable-next-line no-unused-vars
  const [street, city, country] = address.split(', ');
  const formatedMileage = new Intl.NumberFormat('uk-UA').format(mileage);
  return (
    <li className={css.carItemContainer}>
      <img src={img} alt="Car Photo" className={css.carImg} />
      <div className={css.mainInfo}>
        <p className={clsx(css.mainInfoItem, css.modelInfo)}>
          <span className={clsx(css.nodelInfoItem, css.brand)}>
            {brand + ' '}
          </span>
          <span className={clsx(css.nodelInfoItem, css.model)}>{model}</span>,
          <span className={clsx(css.nodelInfoItem, css.year)}>
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
        <span>{`${formatedMileage} km`}</span>
      </p>
      <Link to={`/cars/${id}`} className={css.readMoreBtn}>
        Read more
      </Link>
    </li>
  );
};
export default CarItem;
