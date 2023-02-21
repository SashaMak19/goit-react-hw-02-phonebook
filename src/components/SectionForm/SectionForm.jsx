import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './section-form.module.css';

class SectionForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const propertyOfState = e.currentTarget.name;
    this.setState({
      [propertyOfState]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={styles.label}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

SectionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export { SectionForm };
