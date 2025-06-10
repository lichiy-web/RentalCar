import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMoreBtn.module.css';
import {
  selectIsLoading,
  selectPaginationData,
} from '../../redux/catalog/selectors';
import { fetchCars } from '../../redux/catalog/operations';

const LoadMoreBtn = () => {
  const isLoading = useSelector(selectIsLoading);
  const { perPage, page, hasNextPage } = useSelector(selectPaginationData);
  console.log({ perPage, page, hasNextPage });
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(fetchCars({ perPage, page: page + 1 }));
  };
  return (
    hasNextPage && (
      <button
        type="button"
        className={css.loadMoreBtn}
        onClick={handleLoadMore}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    )
  );
};
export default LoadMoreBtn;
