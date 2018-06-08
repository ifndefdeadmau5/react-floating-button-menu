import React, { Component } from 'react';
import styled from 'styled-jss';
import PropTypes from 'prop-types';

const Wrapper = styled('li')(
  ({ isOpen, slideSpeed, backgroundColor, size, iconColor, margin, direction }) => ({
    backgroundColor,
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
    marginTop: (direction === 'down') ? margin : 0,
    marginBottom: (direction === 'up') ? margin : 0,
    marginLeft: (direction === 'right') ? margin : 0,
    marginRight: (direction === 'left') ? margin : 0,
    '& > a > svg': {
      fill: iconColor,
    },
  }),
);

class ChildButton extends Component {
  static propTypes = {
    iconButton: PropTypes.func.isRequired,
    direction: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    isOpen: PropTypes.bool,
    size: PropTypes.number,
    margin: PropTypes.number,
  };

  static defaultProps = {
    iconColor: 'black',
    size: '40',
    margin: 0,
    isOpen: false,
  };

  render() {
    const { iconButton: IconButton, ...other } = this.props;

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
