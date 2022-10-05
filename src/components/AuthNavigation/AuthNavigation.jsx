import { NavLink } from 'react-router-dom';
import s from "./AuthNavigation.module.css"
export const AuthNavigation = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={s.link}   to="/register">
        Register
      </NavLink>
      <NavLink className={s.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
