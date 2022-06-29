import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-input" />
        <textarea data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="submit" data-testid="save-button"> Me clique :3 </button>
      </div>
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
