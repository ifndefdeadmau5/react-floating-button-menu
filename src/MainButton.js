/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.a`
  background-color: ${props => props.backgroundColor};
  display: flex;
  position: absolute;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
  cursor: pointer;
  outline: none;
  padding: 0;
  -webkit-user-drag: none;
  font-weight: bold;
  color: #f1f1f1;
  width: ${props => props.size.main}px;
  height: ${props => props.size.main}px;
  justify-content: center;
  align-items: center;
  -webkit-transition: -webkit-transform 300ms;
  transition: transform 300ms;
  ${prop => (prop.isOpen ? `
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  ` : '')}
`;

const IconResting = props => (
  styled(props.iconResting)`
    position: absolute;
    fill: ${props.iconColor};
    opacity: ${(props.isOpen ? 0 : 1)};
  `
);

const IconActive = props => (
  styled(props.iconActive)`
    position: absolute;
    fill: ${props.iconColor};
    opacity: ${(props.isOpen ? 1 : 0)}
  `
);

class MainButton extends Component {
  static propTypes = {
    iconResting: PropTypes.func.isRequired,
    iconActive: PropTypes.func.isRequired,
    iconColor: PropTypes.string,
    isOpen: PropTypes.bool,
    size: PropTypes.shape({
      main: PropTypes.number,
      child: PropTypes.number,
    }),
  };

  static defaultProps = {
    iconColor: '#ff1744',
    size: {
      main: 56,
      child: 56,
    },
    isOpen: false,
  };

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

export default MainButton;
