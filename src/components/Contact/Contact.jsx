import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>
      <button className={styles.deleteButton} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
