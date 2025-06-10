import './App.css';
import Loader from '../Loader/Loader';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeTab from '../HomeTab/HomeTab';
import NotFoundPage from '../../pages/NotFoundPage';
// import Layout from '../Layout/Layout';

const CatalogTab = lazy(() => import('../CatalogTab/CatalogTab'));
const CarTab = lazy(() => import('../CarTab/CarTab'));
const Layout = lazy(() => import('../Layout/Layout'));

function App() {
  return (
    <div className="app-container">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeTab />} />
            <Route path="catalog" element={<CatalogTab />} />
            <Route path="catalog/:carId" element={<CarTab />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
