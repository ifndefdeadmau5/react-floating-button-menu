import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;
  box-sizing: border-box;
  padding-left: 0;
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

class FloatingMenu extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = (event) => {
    event.preventDefault();
    console.log('toggleMenu');

    // flip the state from open to close and viceversa
    this.setState({
      isOpen: !this.state.isOpen,
    }, () => console.log(this.state.isOpen));
  };

  render() {
    const { slideSpeed } = this.props;
    const { isOpen } = this.state;
    const childrenWithProps = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        isOpen,
        slideSpeed,
      }),
    );

    return (
      <Container onClick={this.toggleMenu}>
        {childrenWithProps}
      </Container>
    );
  }
}

FloatingMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  slideSpeed: PropTypes.number,
};

FloatingMenu.defaultProps = {
  background: 'palevioletred',
};

export default FloatingMenu;
