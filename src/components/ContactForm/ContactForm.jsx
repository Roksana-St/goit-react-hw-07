import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required('Required'),
    number: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const contactWithId = { ...values, id: nanoid() };
    dispatch(addContact(contactWithId));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.formik}>
          <label htmlFor="name">Name</label>
          <Field className={styles.field} type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

          <label htmlFor="number">Number</label>
          <Field className={styles.field} type="text" name="number" />
          <ErrorMessage name="number" component="div" style={{ color: 'red' }} />

          <button className={styles.button} type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;

