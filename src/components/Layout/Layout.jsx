import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/catalog/selectors';

const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <main className={css.mainContainer}>
      <Header />
      {error ? <ErrorMessage /> : <Outlet />}

      <Loader isLoading={isLoading} />
    </main>
  );
};
export default Layout;
