import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.a`
  background-color: #e9e9e9;
  display: flex;
  position: relative;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  -webkit-user-drag: none;
  font-weight: bold;
  color: #f1f1f1;
  width: 56px;
  height: 56px;
`;

class MainButton extends Component {
  render() {
    const { iconResting, iconActive } = this.props;
    const IconResting = iconResting;
    const IconActive = iconActive;
    return (
      <Wrapper>
        <IconResting />
        <IconActive />
      </Wrapper>
    );
  }
}

MainButton.propTypes = {
  iconResting: PropTypes.func.isRequired,
  iconActive: PropTypes.func.isRequired,
};

export default MainButton;
