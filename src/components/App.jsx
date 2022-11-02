import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { selectIsRefreshing} from '../redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';
import { Routes, Route} from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { PrivateRoute } from './HOCs/PrivateRoute';
import { PublicRoute } from './HOCs/PublicRoute';
import  HomePage  from '../pages/HomePage/HomePage';
import  ContactsPage  from '../pages/ContactsPage';
import  LoginPage  from '../pages/LoginPage';
import  RegisterPage  from '../pages/RegisterPage';

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsRefreshing);


  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  
  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
          
        </>
      )}
    </>

    
  );
};
export default App;
