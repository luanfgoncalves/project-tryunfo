import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div>
        <div>
          <div data-testid="name-card">{ cardName }</div>
          <div data-testid="image-card">{ cardImage }</div>
          <div data-testid="rare-card">{ cardTrunfo }</div>
          <div data-testid="description-card">{ cardDescription }</div>
          <div data-testid="rare-card">{ cardRare }</div>
          <div>
            <div>
              <div>{ cardAttr1 }</div>
              <div>VALOR-1</div>
            </div>
            <div>
              <div>{ cardAttr2 }</div>
              <div>VALOR-2</div>
            </div>
            <div>
              <div>{ cardAttr3 }</div>
              <div>VALOR-3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr1: propTypes.string.isRequired,
  cardAttr2: propTypes.string.isRequired,
  cardAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
