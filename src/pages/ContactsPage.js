import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import {Loader} from 'components/Loader/Loader';
import Container from 'components/Container/Container';
export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div    
    >
      <h1 >Contacts</h1>
      <Container>
        <ContactForm />
        {error && <h2>Error...</h2>}
        {isLoading && <Loader />}
        {contacts.length > 0 ? (
          <div >
            <Filter name="filter" />
            <ContactList />
          </div>
        ) : (
          <h2>You have not added contacts yet.</h2>
        )}
      </Container>
    </div>
  );
}