/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled('a')(({ background, size }) => ({
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
  width: size,
  height: size,
  background,
}));

const IconWrapper = styled('div')(({ isOpen }) => ({
  display: 'flex',
  textDecoration: 'none',
  WebkitTransition: '-webkit-transform 300ms',
  transition: 'transform 300ms',
  WebkitTransform: `rotate(${isOpen ? 180 : 0}deg)`,
  transform: `rotate(${isOpen ? 180 : 0}deg)`,
}));

const MainButton = ({ iconResting, iconActive, isOpen, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <IconWrapper isOpen={isOpen}>
        {isOpen ? iconActive : iconResting}
      </IconWrapper>
    </Wrapper>
  );
};

MainButton.propTypes = {
  iconResting: PropTypes.node.isRequired,
  iconActive: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  size: PropTypes.number,
};

MainButton.defaultProps = {
  isOpen: false,
  size: 56,
};

export default MainButton;
