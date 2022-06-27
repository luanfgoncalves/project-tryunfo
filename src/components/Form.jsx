import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <input type="text" data-testid="name-input" />
        <textarea data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <select data-testid="rare-input">
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="submit" data-testid="save-button"> Me clique :3 </button>
      </div>
    );
  }
}

export default Form;
