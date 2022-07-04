import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Card.css';

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
            { cardName }
          </h2>

          <img data-testid="image-card" scr={ cardImage } alt={ cardName } />

          <div data-testid="rare-card">
            Raridade:
            { cardTrunfo }
          </div>

          <div data-testid="description-card">
            Descrição:
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
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
