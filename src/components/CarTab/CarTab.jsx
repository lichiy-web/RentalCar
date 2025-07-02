import { useDispatch, useSelector } from 'react-redux';
import css from './CarTab.module.css';
import { useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { fetchCar } from '../../redux/catalog/operations';
import { selectCar } from '../../redux/catalog/selectors';
import {
  CalendarIcon,
  CarIcon,
  CheckCircleIcon,
  FuelPumpIcon,
  GearIcon,
  MapPointerIcon,
} from '../Icon/Icon';
import {
  capitalize,
  extractOrderId,
  mileageFormat,
  parseAddress,
} from '../../utilits/utilits';
import BookingForm from '../BookingForm/BookingForm';

const CarTab = () => {
  const { carId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchCar({ carId, signal: abortController.signal }));

    return () => abortController.abort();
  }, [dispatch, carId]);

  const car = useSelector(selectCar);
  if (!car) return;
  const {
    year,
    brand,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;

  const { city, country } = parseAddress(address);
  const orderId = extractOrderId(img);

  return (
    <div className={css.carTabContainer}>
      <div className={clsx(css.column, css.left)}>
        <img className={css.carImg} src={img} alt="Car Photo" />
        <BookingForm className={css.bookingFormDesktop} />
      </div>

      <div className={clsx(css.column, css.right)}>
        <div className={css.carMainInfo}>
          <div className={css.details}>
            <h1 className={clsx(css.row, css.detailsTitle)}>
              {brand} {model}, {year}
              <span className={css.orderId}>Id: {orderId}</span>
            </h1>

            <div className={clsx(css.row, css.location)}>
              <MapPointerIcon className={clsx(css.icon, css.mapPointerIcon)} />
              <span>{city},</span>
              <span>{country}</span>
              <span className={css.mileage}>
                Mileage: {mileageFormat(mileage)}
              </span>
            </div>
            <div className={clsx(css.row, css.rentalPrice)}>${rentalPrice}</div>
            <div className={clsx(css.row, css.description)}>{description}</div>
          </div>
        </div>

        <div className={css.carAdditionalInfo}>
          <div className={css.rentalConditions}>
            <h2 className={(css.row, css.subTitle)}>Rental Conditions:</h2>
            {rentalConditions.map((condition, id) => (
              <div key={id} className={css.row}>
                <CheckCircleIcon className={css.icon} />
                <span>{condition}</span>
              </div>
            ))}
          </div>
          <div className={css.carSpecifications}>
            <h2 className={clsx(css.row, css.subTitle)}>Car Specifications:</h2>
            <div className={clsx(css.row)}>
              <CalendarIcon className={css.icon} />
              <span>Year:</span>
              <span>{year}</span>
            </div>
            <div className={clsx(css.row)}>
              <CarIcon className={css.icon} />
              <span>Type:</span>
              <span>{capitalize(type)}</span>
            </div>
            <div className={clsx(css.row)}>
              <FuelPumpIcon className={css.icon} />
              <span>Fuel Consumption:</span>
              <span>{fuelConsumption}</span>
            </div>
            <div className={clsx(css.row)}>
              <GearIcon className={css.icon} />
              <span>Engine Size:</span>
              <span>{engineSize}</span>
            </div>
          </div>
          <div className={css.accessoritiesFunctionalities}>
            <h2 className={(css.row, css.subTitle)}>
              Accessories and functionalities:
            </h2>
            {accessories.map((accessory, id) => (
              <div key={id} className={css.row}>
                <CheckCircleIcon className={css.icon} />
                <span>{accessory}</span>
              </div>
            ))}
            {functionalities.map((functionality, id) => (
              <div key={id} className={css.row}>
                <CheckCircleIcon className={css.icon} />
                <span>{functionality}</span>
              </div>
            ))}
          </div>
        </div>
        <BookingForm className={css.bookingFormTabletMob} />
      </div>
    </div>
  );
};
export default CarTab;
