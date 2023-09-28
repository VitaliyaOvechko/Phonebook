import { useSelector } from 'react-redux';
import {
  selectUSer,
  selectisLoggedIn,
  selectisRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUSer);
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);

  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};
