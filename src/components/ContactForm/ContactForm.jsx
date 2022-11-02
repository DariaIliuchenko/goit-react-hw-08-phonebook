import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import Notiflix from 'notiflix';

import PropTypes from 'prop-types';
export default function ContactForm({ closeModal }) {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      contacts?.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.failure(`${name} is already in contacts`);
    }

    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    reset();
    closeModal();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.wrap}>
        <label className={s.label} for="name">
          Name
        </label>
        <input
          className={s.input}
          name="name"
          onChange={handleChange}
          value={name}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={s.wrap}>
        <label className={s.label}>Phone</label>
        <input
          className={s.input}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button variant="contained" type="submit" className={s.btn}>
        Add contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  closeModal: PropTypes.func,
};