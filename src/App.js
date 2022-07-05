import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardNameState: '', // Nome da carta definido pelo form
      cardDescriptionState: '', // Descrição da carta definida pelo form
      cardAttr1State: '', // atributo 1(força)
      cardAttr2State: '', // atributo 2(agilidade)
      cardAttr3State: '', // atributo 3(resiliencia)
      cardImageState: '', // figura da carta
      cardRareState: '', // raridade da carta
      hasTrunfoState: false,
      cardTrunfoState: false, // trunfo da carta
      SaveButtonState: true, // estado da validação do btn Save(se pode ou não salvar)
      cardData: [], // array que guarda os dados das cartas p/ geração
    };
  }

  // constante com o estado original para a redefinição do formulário após uso
  originalState = () => {
    this.setState({
      cardNameState: '', // Nome da carta definido pelo form
      cardDescriptionState: '', // Descrição da carta definida pelo form
      cardAttr1State: '', // atributo 1(força)
      cardAttr2State: '', // atributo 2(agilidade)
      cardAttr3State: '', // atributo 3(resiliencia)
      cardImageState: '', // figura da carta
      cardRareState: '', // raridade da carta
      cardTrunfoState: false, // trunfo da carta
      SaveButtonState: true, // estado da validação do btn Save(se pode ou não salvar)
    });
  }

  // validador do botão de salvar, pra garantir que a carta só será salva se estiver dentro das especificações
  saveButtonManager = () => {
    const { cardNameState,
      cardDescriptionState,
      cardAttr1State,
      cardAttr2State,
      cardAttr3State,
      cardImageState,
      cardRareState,
    } = this.state;

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

  // controle de checkbox e habilitação do botão de salvar
  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }), () => this.saveButtonManager());
  };

  onSaveButtonClick = () => {
    const { cardNameState, cardDescriptionState, cardAttr1State, cardAttr2State,
      cardAttr3State, cardImageState, cardRareState, cardTrunfoState, cardData,
    } = this.state;

    const card = {
      cardNameState,
      cardDescriptionState,
      cardAttr1State,
      cardAttr2State,
      cardAttr3State,
      cardImageState,
      cardRareState,
      cardTrunfoState,
    };
    this.setState({
      cardData: [...cardData, card],
      hasTrunfoState: card.cardTrunfoState,
    }, this.originalState);
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
      hasTrunfoState,
      cardTrunfoState,
      SaveButtonState,
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
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
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
        <h3>Cartas:</h3>
        <p>cartas disponiveis ficaram aqui</p>
        {/* { cards.map((card) => (
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
        ))} */}
      </main>
    );
  }
}

export default App;

// Referêcias:
// https://www.codegrepper.com/code-examples/javascript/oninputchange+react
// https://pt-br.reactjs.org/docs/handling-events.html
