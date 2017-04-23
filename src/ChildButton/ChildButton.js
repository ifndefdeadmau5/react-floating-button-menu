import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildButton extends Component {
  render() {
    const { iconButton } = this.props;
    return (
      <li>
        <a>
          <iconButton />
        </a>
      </li>
    );
  }
}

ChildButton.propTypes = {
  iconButton: PropTypes.element.isRequired,
};

export default ChildButton;
