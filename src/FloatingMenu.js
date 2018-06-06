import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledJss from 'styled-jss';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-left: 0;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
const StyledUl = styledJss('ul')({
  position: 'absolute',
  display: 'flex',
  listStyle: 'none',
  margin: '0',
  padding: '0',
},
({ up }) => ({
  flexDirection: up ? 'row-reverse' : 'column-reverse',
}),
);

class FloatingMenu extends Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    slideSpeed: PropTypes.number,
    direction: PropTypes.string,
  };

  static defaultProps = {
    background: 'palevioletred',
    slideSpeed: 500,
    direction: 'down',
  };

  state = {
    isOpen: false,
  };

  toggleMenu = event => {
    event.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { slideSpeed, direction } = this.props;
    const { isOpen } = this.state;
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        isOpen,
        slideSpeed,
        direction,
      }),
    );

    return (
      <Container {...this.props}>
        <StyledUl onClick={this.toggleMenu} direction={direction}>{childrenWithProps}</StyledUl>
      </Container>
    );
  }
}

export default FloatingMenu;
