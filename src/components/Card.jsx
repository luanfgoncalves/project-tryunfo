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
      cardTrunfo, // bool
    } = this.props;
    return (
      <section>
        <div>
          <h2 data-testid="name-card">
            Nome:
            {' '}
            { cardName }
          </h2>

          <img data-testid="image-card" scr={ cardImage } alt="Imagem da carta" />

          <div data-testid="rare-card">
            Super Trunfo!
            {' '}
            { cardTrunfo }
          </div>

          <div data-testid="description-card">
            Descrição:
            {' '}
            { cardDescription }
          </div>

          <div data-testid="rare-card">{ cardRare }</div>

          <div>
            <div data-testid="attr1-card">
              Attr1:
              { cardAttr1 }
            </div>

            <div data-testid="attr2-card">
              Attr2:
              { cardAttr2 }
            </div>

            <div data-testid="attr3-card">
              Attr3:
              { cardAttr3 }
            </div>
          </div>

          <div data-testid="rare-card">
            { cardRare }
          </div>

          {cardTrunfo === true ? <div data-testid="trunfo-card">Super Trunfo</div> : ''}
          {/* if cardTrunfo === true{<div>Super Trunfo</div>} else <div>''</div> */}

        </div>
      </section>
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
