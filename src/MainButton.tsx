/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import styled from 'styled-components';

// @ts-ignore
const Wrapper = styled('a')(({ background, size }: any) => ({
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

// @ts-ignore
const IconWrapper = styled(({ isOpen, ...rest }) => <div {...rest} />)(
  ({ isOpen }) => ({
    display: 'flex',
    textDecoration: 'none',
    WebkitTransition: '-webkit-transform 300ms',
    transition: 'transform 300ms',
    WebkitTransform: `rotate(${isOpen ? 180 : 0}deg)`,
    transform: `rotate(${isOpen ? 180 : 0}deg)`,
  })
);

export interface MainButtonProps {
  iconActive: any;
  iconResting: any;
  isOpen?: boolean;
  background: string;
  onClick: any;
  size: number;
}

const MainButton = ({
  iconResting,
  iconActive,
  isOpen,
  ...rest
}: MainButtonProps) => {
  return (
    <Wrapper {...rest}>
      <IconWrapper isOpen={isOpen}>
        {isOpen ? iconActive : iconResting}
      </IconWrapper>
    </Wrapper>
  );
};

export default MainButton;
