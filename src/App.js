import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      saveButton: true,
      cardImage: '',
      cardData: [],
      hasTrunfo: false,
    };
  }

    // Função retorna o State a sua condição original
    resetState = () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0', // atributo 1(força)
        cardAttr2: '0', // atributo 2(agilidade)
        cardAttr3: '0', // atributo 3(resiliencia)
        cardRare: 'normal',
        cardTrunfo: false,
        saveButton: true,
        cardImage: '',
      });
    }

    onSaveButtonClick = () => {
      const { cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage, cardRare, cardTrunfo, cardData,
      } = this.state;

      const cardSpec = {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      };

      this.setState({
        cardData: [...cardData, cardSpec],
        hasTrunfo: cardSpec.cardTrunfo,
      }, this.resetState);
    };

  saveButtonManager = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const cardNameVar = cardName !== ''
    && cardDescription !== ''
    && cardRare !== ''
    && cardImage !== '';

    const maxAtributeValue = 90;
    const maxAtributeSum = 210;

    const atribute1Value = Number(cardAttr1) >= 0
    && Number(cardAttr1) <= maxAtributeValue;

    const atribute2Value = Number(cardAttr2) >= 0
    && Number(cardAttr2) <= maxAtributeValue;

    const atribute3Value = Number(cardAttr3) >= 0
    && Number(cardAttr3) <= maxAtributeValue;

    const attrSum = Number(cardAttr1)
    + Number(cardAttr2)
    + Number(cardAttr3) <= maxAtributeSum;

    this.setState({
      saveButton: !(cardNameVar
        && atribute1Value
        && atribute2Value
        && atribute3Value
        && attrSum) });
  }

  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }), () => this.saveButtonManager());
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      saveButton,
      cardImage,
      hasTrunfo,
    } = this.state;

    return (
      <main>

        <h1>Tryunfo</h1>

        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ saveButton }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardImage={ cardImage }
          hasTrunfo={ hasTrunfo }
        />

        <p>Sua carta: </p>

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
        />

      </main>
    );
  }
}

export default App;

// Referêcias:
// https://www.codegrepper.com/code-examples/javascript/oninputchange+react
// https://pt-br.reactjs.org/docs/handling-events.html
