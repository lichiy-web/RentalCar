import { useDispatch, useSelector } from 'react-redux';
import css from './CarTable.module.css';
import { selectCars } from '../../redux/catalog/selectors';
import CarItem from '../CarItem/CarItem';
import { fetchCar } from '../../redux/catalog/operations';
import { useEffect } from 'react';

const CarTable = () => {
  const abortController = new AbortController();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCar({
        carId: '11a3ab35-07b8-4336-b06b-602cdc309f2c',
        signal: abortController.signal,
      })
    );
  });

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
