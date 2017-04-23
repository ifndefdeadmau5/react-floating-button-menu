import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MainButton extends Component {
  render() {
    const { iconResting, iconActive } = this.props;
    const IconResting = iconResting;
    const IconActive = iconActive;
    return (
      <a>
        <IconResting />
        <IconActive />
      </a>
    );
  }
}

MainButton.propTypes = {
  iconResting: PropTypes.element.isRequired,
  iconActive: PropTypes.element.isRequired,
};

export default MainButton;
