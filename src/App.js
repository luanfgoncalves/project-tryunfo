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
    };
  }

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
    && cardRare !== '' && cardImage !== '';

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
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </main>
    );
  }
}

export default App;

// Referêcias:
// https://www.codegrepper.com/code-examples/javascript/oninputchange+react
// https://pt-br.reactjs.org/docs/handling-events.html
