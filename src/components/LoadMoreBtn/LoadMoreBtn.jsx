import { useDispatch, useSelector } from 'react-redux';
import css from './LoadMoreBtn.module.css';
import {
  selectIsLoading,
  selectPaginationData,
} from '../../redux/catalog/selectors';
import { setPage } from '../../redux/catalog/slice';
import clsx from 'clsx';

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
        className={clsx(css.loadMoreBtn, 'button')}
        onClick={handleLoadMore}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    )
  );
};
export default LoadMoreBtn;
