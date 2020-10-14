import React from 'react'
import styled from 'styled-components'

export const DIRECTIONS = {
  up: 'column-reverse',
  down: 'column',
  left: 'row-reverse',
  right: 'row'
}

// @ts-ignore
const StyledUl = styled(({ direction, ...rest }) => <ul {...rest} />)(
  ({ direction }: any) => ({
    display: 'flex',
    width: 'fit-content',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    flexDirection: DIRECTIONS[direction],
    justifyContent: 'center',
    alignItems: 'center'
  })
)

export enum Directions {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

export interface FloatingMenuProps {
  children: JSX.Element[] | JSX.Element | string
  spacing?: number
  slideSpeed?: number
  direction?: Directions
  isOpen: boolean
}

const FloatingMenu = ({
  slideSpeed = 500,
  direction = Directions.Down,
  isOpen = false,
  spacing = 8,
  children,
  ...rest
}: FloatingMenuProps) => {
  const childrenWithProps = React.Children.map(
    children,
    (child: any, index: number) =>
      React.cloneElement(child, {
        isOpen,
        slideSpeed,
        direction,
        index,
        spacing
      })
  )

  return (
    <StyledUl direction={direction} {...rest}>
      {childrenWithProps}
    </StyledUl>
  )
}

export default FloatingMenu
