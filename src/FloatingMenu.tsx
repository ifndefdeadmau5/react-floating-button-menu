import React from 'react';
import styled from 'styled-components';

export const DIRECTIONS = {
  up: 'column-reverse',
  down: 'column',
  left: 'row-reverse',
  right: 'row',
};

const StyledUl = styled('ul')(({ direction }) => ({
  display: 'flex',
  width: 'fit-content',
  listStyle: 'none',
  margin: '0',
  padding: '0',
  flexDirection: DIRECTIONS[direction],
  justifyContent: 'center',
  alignItems: 'center',
}));

interface Props {
  className: string;
  children: JSX.Element[] | JSX.Element | string;
  spacing: number;
  slideSpeed: number;
  direction: 'up' | 'down' | 'left' | 'right';
  isOpen: boolean;
}

const FloatingMenu = ({
  slideSpeed = 500,
  direction = 'down',
  className,
  isOpen = false,
  spacing = 8,
  children,
  ...rest
}: Props) => {
  const childrenWithProps = React.Children.map(
    children,
    (child: any, index: number) =>
      React.cloneElement(child, {
        isOpen,
        slideSpeed,
        direction,
        index,
        spacing,
      })
  );

  return (
    <StyledUl className={className} direction={direction} {...rest}>
      {childrenWithProps}
    </StyledUl>
  );
};

export default FloatingMenu;
