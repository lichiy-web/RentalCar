import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/catalog/selectors';
import { useEffect } from 'react';
import { selectisIsPageLoaded } from '../../redux/app/selectors';
import { completePage } from '../../redux/app/slice';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const isPageLoaded = useSelector(selectisIsPageLoaded);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  console.log({ isLoading, isPageLoaded });

  useEffect(() => {
    if (document.readyState === 'complete') {
      dispatch(completePage()); // якщо сторінка вже завантажена
    } else {
      const handleLoad = () => dispatch(completePage());
      window.addEventListener('load', handleLoad);

      return () => window.removeEventListener('load', handleLoad);
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={css.mainContainer}>
        {error ? <ErrorMessage /> : <Outlet />}
      </main>
      <Loader isLoading={isLoading || !isPageLoaded} />
    </>
  );
};
export default Layout;
