import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-left: 0;
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

const StyledUl = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
`;

class FloatingMenu extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    slideSpeed: PropTypes.number,
    direction: PropTypes.string,
    size: PropTypes.shape({
      main: PropTypes.number,
      child: PropTypes.number,
    }),
  };

  static defaultProps = {
    background: 'palevioletred',
    slideSpeed: 500,
    direction: 'down',
    size: {
      main: 56,
      child: 56,
    },
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
    const { slideSpeed, direction, size } = this.props;
    const { isOpen } = this.state;
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        isOpen,
        slideSpeed,
        direction,
        size,
      }),
    );

    return (
      <Container {...this.props}>
        <StyledUl onClick={this.toggleMenu}>
          {childrenWithProps}
        </StyledUl>
      </Container>
    );
  }
}

export default FloatingMenu;
