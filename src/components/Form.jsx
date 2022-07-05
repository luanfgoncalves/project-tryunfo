import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h2>Adicionar nova carta</h2>

        <input
          placeholder="Nome da carta"
          name="cardName"
          // id="name-input"
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <p>Descrição:</p>
        <textarea
          placeholder="Descrição da carta"
          name="cardDescription"
          // id="description-input"
          // maxLength="100"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <p>Attr01:</p>
        <input
          placeholder="Primeiro atributo"
          name="cardAttr1"
          // id="attr1-input"
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <p>Attr02:</p>
        <input
          placeholder="Segundo atributo"
          name="cardAttr2"
          // id="attr2-input"
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <p>Attr03</p>
        <input
          placeholder="Terceiro atributo"
          name="cardAttr3"
          // id="attr3-input"
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <p>Imagem:</p>
        <input
          placeholder="imagem da carta"
          name="cardImage"
          // id="image-input"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <p>Raridade:</p>
        <select
          // id="rare-input"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <p>Super Trybe Trunfo:</p>
        <input
          placeholder="Trunfo"
          name="cardTrunfo"
          // id="trunfo-input"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          // id="save-button"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
