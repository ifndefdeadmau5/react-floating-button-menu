import React, { Component } from 'react';
import styled from 'styled-jss';
import PropTypes from 'prop-types';

const Wrapper = styled('li')(
  ({ isOpen, slideSpeed, backgroundColor, size, iconColor }) => ({
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
    backgroundColor,
    width: size,
    height: size,
    '& > a > svg': {
      fill: iconColor,
    },
  }),
);
// ${
// (props) => {
//   switch (props.direction) {
//     // TODO: Do not fix the transform value to 60, calculate it based on given buttonSize.
//     case 'left':
//       return `transform: translate(${props.isOpen ? props.order * 60 * -1 : 0}px, 0px);`;
//     case 'right':
//       return `transform: translate(${props.isOpen ? props.order * 60 : 0}px, 0px);`;
//     case 'up':
//       return `transform: translate(0px, ${props.isOpen ? props.order * 60 * -1 : 0}px);`;
//     case 'down':
//       return `transform: translate(0px, ${props.isOpen ? props.order * 60 * 1 : 0}px);`;
//     default:
//       return `transform: translate(0px, ${props.isOpen ? props.order * 60 * 1 : 0}px);`;
//   }
// }
// }
// ${
//   props => ((props.direction === 'left' || props.direction === 'right') ?
//     css`margin-top: ${(props.size.main - props.size.child) / 2}px` :
//     css`margin-left: ${(props.size.main - props.size.child) / 2}px`)
// }

class ChildButton extends Component {
  static propTypes = {
    iconButton: PropTypes.func.isRequired,
    iconColor: PropTypes.string,
    isOpen: PropTypes.bool,
    direction: PropTypes.string,
    offset: PropTypes.number,
    size: PropTypes.number,
  };

  static defaultProps = {
    direction: 'down',
    iconColor: 'black',
    offset: 0,
    size: {
      main: 56,
      child: 56,
    },
    isOpen: false,
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
