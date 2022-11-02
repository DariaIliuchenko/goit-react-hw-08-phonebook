import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import IconButton from '@mui/material/IconButton';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import Avatar from 'react-avatar';
export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.wrapper}>
        <Avatar color= "#00bf8f  " size="40" name={name} round={true} />
        <h3 className={s.name}>{name} </h3>
        <p className={s.number}>{number} </p>
      </div>
      <IconButton
            aria-label="delete"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <HighlightOffSharpIcon/>
          </IconButton>
    </>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
