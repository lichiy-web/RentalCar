import css from './CarTab.module.css';

const CarTab = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.carTabContainer}>
      <div className={css.leftColumn}>
        <h2>Book Car</h2>
        <img src="" alt="Car Photo" />
        <div className={css.bookingForm}>
          <h2>Booking Form</h2>
        </div>
      </div>
      <div className={css.rightColumn}>
        <div className={css.carInfo}>
          <h2>Car Info</h2>
        </div>
      </div>
    </div>
  );
};
export default CarTab;
