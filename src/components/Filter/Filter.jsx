import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ inputValue, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" value={inputValue} onChange={onChange}></input>
    </label>
  );
};

Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Filter };
