import { Navigation } from "../Navigation/Navigation"
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import s from "./AppBar.module.css"
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/auth/authSelectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn && token ? <UserAuthMenu /> : <AuthNavigation />}
    </header>
  );
};