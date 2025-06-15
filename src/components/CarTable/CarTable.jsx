import { useSelector } from 'react-redux';
import css from './CarTable.module.css';
import { selectCars } from '../../redux/catalog/selectors';
import CarItem from '../CarItem/CarItem';
import { isDefined } from '../../utilits/utilits';
import clsx from 'clsx';

const CarTable = () => {
  const cars = useSelector(selectCars);
  const hasResults = isDefined(cars) && cars.length > 0;
  return (
    <div className={clsx(css.carTableContainer, !hasResults && css.noResults)}>
      {hasResults ? (
        <>
          {cars.map(car => (
            <CarItem key={car.id} car={car} />
          ))}
        </>
      ) : (
        <>There are no results...</>
      )}
    </div>
  );
};
export default CarTable;
