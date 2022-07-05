import React from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends React.Component {
  render() {
    const { hasTrunfo, cardTrunfo, onInputChange } = this.props;
    if (!hasTrunfo) {
      return (
        <label htmlFor="trunfo-input">
          <p>Super Trunfo!</p>
          <input
            name="cardTrunfo"
            id="trunfo-input"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      );
    }
    return <p>Você já tem um Super Trunfo em seu baralho</p>;
  }
}

SuperTrunfo.propTypes = {
  hasTrunfo: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
