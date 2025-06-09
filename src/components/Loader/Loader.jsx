import css from './Loader.module.css';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = ({ isLoading = true, strokeColor = '#0B44CD' }) => {
  return (
    <div className={css.loader}>
      <ThreeCircles
        visible={isLoading}
        height="100%"
        width="100%"
        color={strokeColor}
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;
