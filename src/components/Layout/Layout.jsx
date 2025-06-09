import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Layout = () => {
  // const loading = useSelector(selectLoading);
  const isLoading = false;
  // const error = useSelector(selectError);
  const error = null;

  return (
    <main className={css.mainContainer}>
      <Header />
      {error ? <ErrorMessage /> : <Outlet />}

      <Loader isLoading={isLoading} />
    </main>
  );
};
export default Layout;
