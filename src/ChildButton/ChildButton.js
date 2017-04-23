import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperList = styled.li`
  opacity: ${props => (props.isOpen ? 0 : 1)};
  transition: all ${props => (props.isOpen ? 150 : 0)}ms;
  transform: translateY(${props => (props.isOpen ? 70 : 0)}px);
`;

class ChildButton extends Component {
  render() {
    const { iconButton, isOpen } = this.props;
    const IconButton = iconButton;

    return (
      <WrapperList style={{ opacity: isOpen ? 0 : 1 }}>
        <a>
          <IconButton />
        </a>
      </WrapperList>
    );
  }
}

ChildButton.propTypes = {
  iconButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ChildButton;
