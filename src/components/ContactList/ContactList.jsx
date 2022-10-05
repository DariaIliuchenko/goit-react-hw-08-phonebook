import React from 'react';
import ContactListItem from './ContactListItem.jsx';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  return (
    <ul>
      {contacts
        .filter(contact => {
          return filter
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : true;
        })
        .map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
            <ContactListItem
            id={id}
            name={name}
            number={number}
            
            />
            </li>
          );
        })}
    </ul>
  );
}


