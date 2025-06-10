import { useSelector } from 'react-redux';
import css from './CarTable.module.css';
import { selectCars } from '../../redux/catalog/selectors';
import CarItem from '../CarItem/CarItem';

const CarTable = () => {
  const cars = useSelector(selectCars);
  console.log('CarTable', { cars });
  return (
    <div className={css.carTableContainer}>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
};
export default CarTable;
