import { FavoriteCheckedIcon, FavoriteIcon } from '../Icon/Icon';

const FavoriteChevron = props =>
  props.isFavorite ? (
    <FavoriteCheckedIcon {...props} />
  ) : (
    <FavoriteIcon {...props} />
  );
export default FavoriteChevron;
