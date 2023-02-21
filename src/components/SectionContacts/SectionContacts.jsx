import PropTypes from 'prop-types';
import styles from './section-contacts.module.css';

const SectionContacts = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.item}>
          {name}: {number}
          <button
            type="button"
            onClick={() => onDelete(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

SectionContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { SectionContacts };
