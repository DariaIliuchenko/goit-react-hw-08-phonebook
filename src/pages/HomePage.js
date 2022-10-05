import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectIsLoggedIn} from 'redux/auth/authSelectors';
export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
    return (
    <>
      {isLoggedIn ? (
        <div >
          <h1 >Welcome to the Phonebook</h1>
          
        </div>
      ) : (
        <div >
          <h1 >Welcome to the Phonebook</h1>
          <p >
            Before you get started, please <NavLink to="/register">
          Register
        </NavLink> or <NavLink to="/login">
          Log In
        </NavLink>. 
          </p>
        </div>
      )}
    </>
  );
}