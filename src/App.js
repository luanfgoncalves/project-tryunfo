import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardNameState: '',
      cardDescriptionState: '',
      cardAttr1State: '',
      cardAttr2State: '',
      cardAttr3State: '',
      cardImageState: '',
      cardRareState: '',
      cardTrunfoState: 'false', // boll
      // hasTrunfoState: 'false',
      SaveButtonState: false,
      onSaveButtonClickState: () => {},
    };
  }

  onSaveButtonClick = () => {
    const { cardNameState, cardDescriptionState, cardRareState,
      cardAttr1State, cardAttr2State, cardAttr3State, cardImageState } = this.state;

    const cardNameVar = cardNameState !== ''
    && cardDescriptionState !== ''
    && cardRareState !== '' && cardImageState !== '';

    const maxAtributeValue = 90;
    const maxAtributeSum = 210;
    const atribute1Value = Number(cardAttr1State) >= 0
    && Number(cardAttr1State) <= maxAtributeValue;

    const atribute2Value = Number(cardAttr2State) >= 0
    && Number(cardAttr2State) <= maxAtributeValue;

    const atribute3Value = Number(cardAttr3State) >= 0
    && Number(cardAttr3State) <= maxAtributeValue;

    const attrSum = Number(cardAttr1State)
    + Number(cardAttr2State)
    + Number(cardAttr3State) <= maxAtributeSum;

    this.setState({
      SaveButtonState: !(cardNameVar
        && atribute1Value
        && atribute2Value
        && atribute3Value
        && attrSum) });
  }

  // controle de checkbox
  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }), () => this.onSaveButtonClick());
  };

  render() {
    const {
      cardNameState,
      cardDescriptionState,
      cardAttr1State,
      cardAttr2State,
      cardAttr3State,
      cardImageState,
      cardRareState,
      cardTrunfoState,
      // hasTrunfoState,
      SaveButtonState,
      // onInputChangeState,
      onSaveButtonClickState,
    } = this.state;

    return (
      <main>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardNameState }
          cardDescription={ cardDescriptionState }
          cardAttr1={ cardAttr1State }
          cardAttr2={ cardAttr2State }
          cardAttr3={ cardAttr3State }
          cardImage={ cardImageState }
          cardRare={ cardRareState }
          cardTrunfo={ cardTrunfoState }
          hasTrunfo={ hasTrunfoState }
          isSaveButtonDisabled={ SaveButtonState }
          onInputChange={ this.onInputChangeState }
          onSaveButtonClick={ onSaveButtonClickState }
        />
        <Card
          cardName={ cardNameState }
          cardDescription={ cardDescriptionState }
          cardAttr1={ cardAttr1State }
          cardAttr2={ cardAttr2State }
          cardAttr3={ cardAttr3State }
          cardImage={ cardImageState }
          cardRare={ cardRareState }
          cardTrunfo={ cardTrunfoState }
        />
      </main>
    );
  }
}

export default App;

// Referêcias:
// https://www.codegrepper.com/code-examples/javascript/oninputchange+react
// https://pt-br.reactjs.org/docs/handling-events.html
