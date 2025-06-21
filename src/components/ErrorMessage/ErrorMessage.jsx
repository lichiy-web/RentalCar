import css from './ErrorMessage.module.css';
import errImg from '../../assets/img/fetchError01-transparent.png';
import { useDispatch } from 'react-redux';
import { resetError } from '../../redux/catalog/slice';

const ErrorMessage = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.errorMessage}>
      <div className={css.meassge}>
        Something went wrong... Try again later!
      </div>
      <img
        className={css.errorImage}
        src={errImg}
        alt="Fetch Error"
        // width={400}
        // height={400}
      />
      <button
        className={css.resetErrorBtn}
        type="button"
        onClick={() => dispatch(resetError())}
      >
        Try again
      </button>
    </div>
  );
};
export default ErrorMessage;
