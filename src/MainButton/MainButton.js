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
  iconResting: PropTypes.func.isRequired,
  iconActive: PropTypes.func.isRequired,
};

export default MainButton;
