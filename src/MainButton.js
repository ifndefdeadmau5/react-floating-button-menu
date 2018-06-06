/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import styled from 'styled-jss';
import PropTypes from 'prop-types';

const Wrapper = styled('a')(
  ({ backgroundColor, size }) => ({
    zIndex: '1',
    display: 'flex',
    border: 'none',
    borderRadius: '50%',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
    cursor: 'pointer',
    outline: 'none',
    padding: '0',
    WebkitUserDrag: 'none',
    fontWeight: 'bold',
    color: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    WebkitTransition: '-webkit-transform 300ms',
    transition: 'transform 300ms',
    width: size,
    height: size,
    backgroundColor,
  }),
  ({ isOpen }) => ({
    WebkitTransform: `rotate(${isOpen ? 180 : 0}deg)`,
    transform: `rotate(${isOpen ? 180 : 0}deg)`,
  }),
);
const IconResting = ({ iconResting, isOpen }) =>
  styled(iconResting)({
    position: 'absolute',
    opacity: isOpen ? 0 : 1,
  });
const IconActive = ({ iconActive, isOpen }) =>
  styled(iconActive)({
    position: 'absolute',
    opacity: isOpen ? 1 : 0,
  });

class MainButton extends Component {
  static propTypes = {
    iconResting: PropTypes.func.isRequired,
    iconActive: PropTypes.func.isRequired,
    iconColor: PropTypes.string,
    isOpen: PropTypes.bool,
    size: PropTypes.number,
  };

  static defaultProps = {
    iconColor: '#ff1744',
    isOpen: false,
    size: 56,
  };

  render() {
    const { iconResting, iconActive, isOpen } = this.props;
    const StyledIconResting = IconResting({ iconResting, isOpen });
    const StyledIconActive = IconActive({ iconActive, isOpen });

    return (
      <Wrapper {...this.props}>
        <StyledIconResting />
        <StyledIconActive />
      </Wrapper>
    );
  }
}

export default MainButton;
