/* eslint-disable no-nested-ternary  */
import React, { Component } from 'react';
import styled from 'styled-jss';
import PropTypes from 'prop-types';

const Wrapper = styled('li')(
  ({ isOpen, slideSpeed, background, size, iconColor, spacing, direction }) => ({
    background,
    display: 'flex',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
    cursor: 'pointer',
    outline: 'none',
    padding: '0',
    WebkitUserDrag: 'none',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isOpen ? 1 : 0,
    transition: `all ${slideSpeed}ms`,
    width: size,
    height: size,
    marginTop: direction === 'down' ? spacing : 0,
    marginBottom: direction === 'up' ? spacing : 0,
    marginLeft: direction === 'right' ? spacing : 0,
    marginRight: direction === 'left' ? spacing : 0,
    color: iconColor,
  }),
);

class ChildButton extends Component {
  static propTypes = {
    icon: PropTypes.node.isRequired,
    direction: PropTypes.string,
    index: PropTypes.number,
    onClick: PropTypes.func,
    isOpen: PropTypes.bool,
    size: PropTypes.number,
    spacing: PropTypes.number,
  };

  static defaultProps = {
    direction: 'up',
    index: 1,
    iconColor: 'black',
    size: '40',
    spacing: 0,
    isOpen: false,
    onClick: null,
  };

  render() {
    const {
      icon,
      index,
      direction,
      size,
      spacing,
      isOpen,
      onClick,
    } = this.props;
    const offsetX =
      direction === 'right' ? (size + spacing) * index :
      direction === 'left' ? (size + spacing) * index * -1 : 0;
    const offsetY =
      direction === 'down' ? (size + spacing) * index :
      direction === 'up' ? (size + spacing) * index * -1 : 0;

    return (
      <Wrapper
        {...this.props}
        onClick={isOpen ? onClick : null}
        style={{
          transform: `translate(${isOpen ? 0 : -offsetX}px, ${isOpen ? 0 : -offsetY}px)`,
        }}
      >
        {icon}
      </Wrapper>
    );
  }
}

export default ChildButton;
