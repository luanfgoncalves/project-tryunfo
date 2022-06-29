import React from 'react';
import propTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cartAttr1,
      cartAttr2,
      cartAttr3,
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
              <div>{ cartAttr1 }</div>
              <div>VALOR-1</div>
            </div>
            <div>
              <div>{ cartAttr2 }</div>
              <div>VALOR-2</div>
            </div>
            <div>
              <div>{ cartAttr3 }</div>
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
  cartAttr1: propTypes.string.isRequired,
  cartAttr2: propTypes.string.isRequired,
  cartAttr3: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
};

export default Card;
