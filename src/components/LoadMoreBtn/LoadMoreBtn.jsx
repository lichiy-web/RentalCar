import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMoreBtn.module.css';
import {
  selectIsLoading,
  selectPaginationData,
} from '../../redux/catalog/selectors';
import { setPage } from '../../redux/catalog/slice';

const LoadMoreBtn = () => {
  const isLoading = useSelector(selectIsLoading);
  const { page, hasNextPage } = useSelector(selectPaginationData);

  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
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
