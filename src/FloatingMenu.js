import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styledJss from 'styled-jss';

export const DIRECTIONS = {
  up: 'column-reverse',
  down: 'column',
  left: 'row-reverse',
  right: 'row',
};

const StyledUl = styledJss('ul')(
  ({ direction }) => ({
    display: 'flex',
    width: 'fit-content',
    listStyle: 'none',
    margin: '0',
    padding: '0',
    flexDirection: DIRECTIONS[direction],
    justifyContent: 'center',
    alignItems: 'center',
    '& > a + li, li + li': {
      marginLeft: 8,
    },
  }),
);

class FloatingMenu extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    slideSpeed: PropTypes.number,
    direction: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    slideSpeed: 500,
    direction: 'down',
  };

  state = {
    isOpen: false,
  };

  toggleMenu = (event) => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { slideSpeed, direction, className } = this.props;
    const { isOpen } = this.state;
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        isOpen,
        slideSpeed,
        direction,
      }),
    );

    return (
      <StyledUl
        className={className}
        onClick={this.toggleMenu}
        direction={direction}
      >
        {childrenWithProps}
      </StyledUl>
    );
  }
}

export default FloatingMenu;
