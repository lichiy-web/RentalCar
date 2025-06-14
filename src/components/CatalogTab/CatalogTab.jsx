import { useDispatch, useSelector } from 'react-redux';
import css from './CatalogTab.module.css';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/catalog/operations';
import CatalogControl from '../CatalogControl/CatalogControl';
import CarTable from '../CarTable/CarTable';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { selectFilters } from '../../redux/filters/selectors';
import { selectPaginationData } from '../../redux/catalog/selectors';
import { resetCatalogControls } from '../../redux/catalog/slice';

const CatalogTab = () => {
  const filters = useSelector(selectFilters);
  const { page, perPage } = useSelector(selectPaginationData);

  // Reset catalog state before each page load
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCatalogControls());
  }, [dispatch]);

  useEffect(() => {
    const abortController = new AbortController();
    dispatch(
      fetchCars({
        perPage,
        page,
        ...filters,
        signal: abortController.signal,
      })
    );

    return () => abortController.abort();
  }, [dispatch, filters, page, perPage]);
  return (
    <div className={css.catalogTabContainer}>
      <CatalogControl />
      <CarTable />
      <LoadMoreBtn />
    </div>
  );
};
export default CatalogTab;
