import { NavLink } from 'react-router-dom';
import s from "./HomePage.module.css"
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
    return (
    <div >
      {isLoggedIn ? (
        <div className={s.wrapper}>
          <h1 className={s.title}>Welcome to the Phonebook</h1>
          
        </div>
      ) : (
        <div className={s.wrapper}>
          <h1 className={s.title}>Welcome to the Phonebook</h1>
          <p className={s.text}>
            Before you get started, please <NavLink className={s.link} to="/register">
          Register
        </NavLink> or <NavLink className={s.link} to="/login">
          Log In
        </NavLink>. 
          </p>
        </div>
      )}
    </div>
  );
}