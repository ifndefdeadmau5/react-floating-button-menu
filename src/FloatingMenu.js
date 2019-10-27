import React from 'react';
import PropTypes from 'prop-types';
import styledJss from 'styled-components';

export const DIRECTIONS = {
  up: 'column-reverse',
  down: 'column',
  left: 'row-reverse',
  right: 'row',
};

const StyledUl = styledJss('ul')(({ direction }) => ({
  display: 'flex',
  width: 'fit-content',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  flexDirection: DIRECTIONS[direction],
  justifyContent: 'center',
  alignItems: 'center',
}));

const FloatingMenu = ({
  slideSpeed = 500,
  direction = 'down',
  className,
  isOpen = false,
  spacing = 8,
  children,
  ...rest
}) => {
  const childrenWithProps = React.Children.map(
    children,
    (child, index) =>
      React.cloneElement(child, {
        isOpen,
        slideSpeed,
        direction,
        index,
        spacing,
      }),
  );

  return (
    <StyledUl
      className={className}
      direction={direction}
      {...rest}
    >
      {childrenWithProps}
    </StyledUl>
  );
};

FloatingMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  slideSpeed: PropTypes.number,
  spacing: PropTypes.number,
  direction: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default FloatingMenu;
