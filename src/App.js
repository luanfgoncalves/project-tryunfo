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
      isSaveButtonDisabledState: () => {},
      onSaveButtonClickState: () => {},
    };
  }

  // controle de checkbox
  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

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
      isSaveButtonDisabledState,
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
          isSaveButtonDisabled={ isSaveButtonDisabledState }
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
