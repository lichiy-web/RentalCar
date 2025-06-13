import { useDispatch } from 'react-redux';
import css from './CatalogTab.module.css';
import { useEffect } from 'react';
import {
  // fetchBrands,
  fetchCar,
  fetchCars,
} from '../../redux/catalog/operations';
import CatalogControl from '../CatalogControl/CatalogControl';
import CarTable from '../CarTable/CarTable';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

const CatalogTab = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(
      fetchCars({
        perPage: 12,
        page: 1,
        // brand: 'BMW',
        // rentalPrice: 40,
        // minMileage: 4000,
        // maxMileage: 5000,
        signal: abortController.signal,
      })
    );

    // dispatch(fetchBrands(abortController.signal));
    dispatch(
      fetchCar({
        carId: '11a3ab35-07b8-4336-b06b-602cdc309f2c',
        signal: abortController.signal,
      })
    );

    return () => abortController.abort();
  }, [dispatch]);
  return (
    <div className={css.catalogTabContainer}>
      <CatalogControl />
      <CarTable />
      <LoadMoreBtn />
    </div>
  );
};
export default CatalogTab;
