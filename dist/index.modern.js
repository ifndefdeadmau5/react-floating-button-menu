import React from 'react';
import styled from 'styled-components';

const DIRECTIONS = {
  up: 'column-reverse',
  down: 'column',
  left: 'row-reverse',
  right: 'row'
};
const StyledUl = styled(({
  direction,
  ...rest
}) => React.createElement("ul", Object.assign({}, rest)))(({
  direction
}) => ({
  display: 'flex',
  width: 'fit-content',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  flexDirection: DIRECTIONS[direction],
  justifyContent: 'center',
  alignItems: 'center'
}));
var Directions;

(function (Directions) {
  Directions["Up"] = "up";
  Directions["Down"] = "down";
  Directions["Left"] = "left";
  Directions["Right"] = "right";
})(Directions || (Directions = {}));

const FloatingMenu = ({
  slideSpeed: _slideSpeed = 500,
  direction: _direction = Directions.Down,
  isOpen: _isOpen = false,
  spacing: _spacing = 8,
  children,
  ...rest
}) => {
  const childrenWithProps = React.Children.map(children, (child, index) => React.cloneElement(child, {
    isOpen: _isOpen,
    slideSpeed: _slideSpeed,
    direction: _direction,
    index,
    spacing: _spacing
  }));
  return React.createElement(StyledUl, Object.assign({
    direction: _direction
  }, rest), childrenWithProps);
};

const Wrapper = styled(({
  isOpen,
  slideSpeed,
  background,
  size,
  spacing,
  direction,
  ...rest
}) => React.createElement("li", Object.assign({}, rest)))(({
  isOpen,
  slideSpeed,
  background,
  size,
  spacing,
  direction
}) => ({
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
  pointerEvents: isOpen ? 'auto' : 'none'
}));

const ChildButton = ({
  direction: _direction = Directions.Up,
  index: _index = 1,
  size: _size = 40,
  spacing: _spacing = 0,
  isOpen: _isOpen = false,
  onClick: _onClick = null,
  icon,
  ...rest
}) => {
  const offsetX = _direction === 'right' ? (_size + _spacing) * _index : _direction === 'left' ? (_size + _spacing) * _index * -1 : 0;
  const offsetY = _direction === 'down' ? (_size + _spacing) * _index : _direction === 'up' ? (_size + _spacing) * _index * -1 : 0;
  return React.createElement(Wrapper, Object.assign({
    isOpen: _isOpen,
    size: _size,
    spacing: _spacing,
    direction: _direction
  }, rest, {
    onClick: _isOpen ? _onClick : null,
    style: {
      transform: `translate(${_isOpen ? 0 : -offsetX}px, ${_isOpen ? 0 : -offsetY}px)`
    }
  }), icon);
};

const Wrapper$1 = styled('a')(({
  background,
  size
}) => ({
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
  background
}));
const IconWrapper = styled(({
  isOpen,
  ...rest
}) => React.createElement("div", Object.assign({}, rest)))(({
  isOpen
}) => ({
  display: 'flex',
  textDecoration: 'none',
  WebkitTransition: '-webkit-transform 300ms',
  transition: 'transform 300ms',
  WebkitTransform: `rotate(${isOpen ? 180 : 0}deg)`,
  transform: `rotate(${isOpen ? 180 : 0}deg)`
}));

const MainButton = ({
  iconResting,
  iconActive,
  isOpen,
  ...rest
}) => {
  return React.createElement(Wrapper$1, Object.assign({}, rest), React.createElement(IconWrapper, {
    isOpen: isOpen
  }, isOpen ? iconActive : iconResting));
};

export { ChildButton, Directions, FloatingMenu, MainButton };
//# sourceMappingURL=index.modern.js.map
