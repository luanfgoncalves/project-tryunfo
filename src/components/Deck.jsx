import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    return (
    <div>
    { cardData.map((element) => (
      <Card
      key={ element.cardName }
      cardName={ element.cardName }
      cardDescription={ element.cardDescription }
      cardAttr1={ element.cardAttr1 }
      cardAttr2={ element.cardAttr2 }
      cardAttr3={ element.cardAttr3 }
      cardRare={ element.cardRare }
      cardTrunfo={ element.cardTrunfo }
      cardImage={ element.cardImage }
    />
    ))}
    </div>
  )};

Deck.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Deck;
