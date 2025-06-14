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
import { capitalize, mileageFormat, parseAddress } from '../../utilits/utilits';

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
    // rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = car;

  const { city, country } = parseAddress(address);

  return (
    <div className={css.carTabContainer}>
      <div className={clsx(css.column, css.left)}>
        <img className={css.carImg} src={img} alt="Car Photo" />
        <div className={css.bookingForm}>
          <h2 className={css.bookingFormTitle}>Booking Form</h2>
        </div>
      </div>

      <div className={clsx(css.column, css.right)}>
        <div className={css.carInfo}>
          <div className={css.details}>
            <h1 className={clsx(css.detailsRow)}>
              {brand} {model}, {year}
            </h1>
            <div className={clsx(css.detailsRow)}>
              <MapPointerIcon className={css.icon} />
              <span>{city},</span>
              <span>{country}</span>
              <span>Mileage: {mileageFormat(mileage)}</span>
            </div>
            <div className={clsx(css.detailsRow, css.rentalPrice)}>
              ${rentalPrice}
            </div>
            <div className={clsx(css.detailsRow, css.description)}>
              {description}
            </div>
          </div>
          <div className={css.rentalConditions}>
            <h2 className={css.rentalConditionsTitle}>Rental Conditions:</h2>
            {rentalConditions.map((condition, id) => (
              <div key={id} className={css.conditionRow}>
                <CheckCircleIcon className={css.icon} />
                {condition}
              </div>
            ))}
          </div>
          <div className={css.carSpecifications}>
            <h2 className={clsx(css.specificationRow)}>Car Specifications:</h2>
            <div className={clsx(css.specificationRow)}>
              <CalendarIcon className={css.icon} />
              <span>Year:</span>
              <span>{year}</span>
            </div>
            <div className={clsx(css.specificationRow)}>
              <CarIcon className={css.icon} />
              <span>Type:</span>
              <span>{capitalize(type)}</span>
            </div>
            <div className={clsx(css.specificationRow)}>
              <FuelPumpIcon className={css.icon} />
              <span>Fuel Consumption:</span>
              <span>{fuelConsumption}</span>
            </div>
            <div className={clsx(css.specificationRow)}>
              <GearIcon className={css.icon} />
              <span>Engine Size:</span>
              <span>{engineSize}</span>
            </div>
          </div>
          <div className={css.accessoritiesFunctionalities}>
            <h2 className={css.functionalitiesRow}>
              Accessories and functionalities:
            </h2>
            {accessories.map((accessory, id) => (
              <div key={id} className={css.functionalitiesRow}>
                <CheckCircleIcon className={css.icon} />
                {accessory}
              </div>
            ))}
            {functionalities.map((functionality, id) => (
              <div key={id} className={css.functionalitiesRow}>
                <CheckCircleIcon className={css.icon} />
                {functionality}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarTab;
