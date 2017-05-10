import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.a`
  background-color: ${props => props.backgroundColor};
  display: flex;
  position: fixed !important;
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
  width: ${props => props.buttonSize}px;
  height: ${props => props.buttonSize}px;
  justify-content: center;
  align-items: center;
`;

const IconResting = props => (
   styled(props.iconResting)`
    position: fixed;
    fill: ${props.iconColor};
    opacity: ${(props.isOpen ? 0 : 1)};
  `
);

const IconActive = props => (
  styled(props.iconActive)`
    position: fixed;
    fill: ${props.iconColor};
    opacity: ${(props.isOpen ? 1 : 0)}
  `
);

class MainButton extends Component {
  render() {
    const StyledIconResting = IconResting(this.props);
    const StyledIconActive = IconActive(this.props);

    return (
      <Wrapper {...this.props}>
        <StyledIconResting />
        <StyledIconActive />
      </Wrapper>
    );
  }
}

MainButton.propTypes = {
  iconResting: PropTypes.func.isRequired,
  iconActive: PropTypes.func.isRequired,
  iconColor: PropTypes.string,
};

MainButton.defautProps = {
  iconColor: '#ff1744',
};

export default MainButton;
