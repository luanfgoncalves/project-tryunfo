import React from 'react';
import PropTypes from 'prop-types';

class DeleteButton extends React.Component {
  render() {
    const { resetState } = this.props;
    return (
      <button
        id="delete-button"
        type="submit"
        data-testid="delete-button"
        onClick={ resetState }
      >
        Excluir
      </button>
    );
  }
}

DeleteButton.propTypes = {
  resetState: PropTypes.func.isRequired,
};

export default DeleteButton;
