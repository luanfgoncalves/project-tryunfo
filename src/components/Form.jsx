import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2-input">
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3-input">
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image-input">
          <input type="text" data-testid="image-input" />
        </label>
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-input">
          <input type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

toHaveFormValues.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cartAttr1: propTypes.string.isRequired,
  cartAttr2: propTypes.string.isRequired,
  cartAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
