import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.ul`

`;

class FloatingMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <Container>
        {children}
      </Container>
    );
  }
}

FloatingMenu.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FloatingMenu;
