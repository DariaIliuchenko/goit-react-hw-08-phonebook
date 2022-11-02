import { useState } from 'react';
import Box from '@mui/material/Box';

import s from "./ModalEl.module.css";
import Modal from '@mui/material/Modal';
import ContactForm from 'components/ContactForm/ContactForm';



const ModalEl = () =>{
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
          <button onClick={handleOpen} className={ s.button}>Add new contact</button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box className={s.modal}>
          <ContactForm closeModal={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
export default ModalEl;