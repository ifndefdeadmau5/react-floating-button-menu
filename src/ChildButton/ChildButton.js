import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.li`
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: all ${props => (props.slideSpeed)}ms;
  ${
  (props) => {
    switch (props.direction) {
      // TODO: Do not fix the transform value to 60, calculate it based on given buttonSize.
      case 'left':
        return `transform: translate(${props.isOpen ? props.order * 60 * -1 : 0}px, 0px);`;
      case 'right':
        return `transform: translate(${props.isOpen ? props.order * 60 : 0}px, 0px);`;
      case 'up':
        return `transform: translate(0px, ${props.isOpen ? props.order * 60 * -1 : 0}px);`;
      case 'down':
        return `transform: translate(0px, ${props.isOpen ? props.order * 60 * 1 : 0}px);`;
      default:
        return `transform: translate(0px, ${props.isOpen ? props.order * 60 * 1 : 0}px);`;
    }
  }
  }
  display: flex;
  background-color: ${props => props.backgroundColor};
  position: absolute;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
  cursor: pointer;
  outline: none;
  ${
    props => ((props.direction === 'left' || props.direction === 'right') ?
      css`margin-top: ${(props.size.main - props.size.child) / 2}px` :
      css`margin-left: ${(props.size.main - props.size.child) / 2}px`)
  }
  padding: 0;
  -webkit-user-drag: none;
  font-weight: bold;
  width: ${props => props.size.child}px;
  height: ${props => props.size.child}px;
  justify-content: center;
  align-items: center;
  
  & > a > svg {
    fill: ${prop => prop.iconColor};
  }
`;


class ChildButton extends Component {
  static propTypes = {
    iconButton: PropTypes.func.isRequired,
    iconColor: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    direction: PropTypes.string,
    offset: PropTypes.number,
    size: PropTypes.shape({
      main: PropTypes.number,
      child: PropTypes.number,
    }),
  };

  static defaultProps = {
    direction: 'down',
    iconColor: 'black',
    offset: 0,
    size: {
      main: 56,
      child: 56,
    },
  };

  render() {
    const { iconButton, ...other } = this.props;
    const IconButton = iconButton;

    return (
      <Wrapper {...other}>
        <a>
          <IconButton />
        </a>
      </Wrapper>
    );
  }
}

export default ChildButton;
