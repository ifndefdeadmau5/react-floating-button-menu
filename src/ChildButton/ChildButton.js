import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  position: fixed;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: all ${props => (props.sliderSpeed)}ms;
  transform: translateY(${props => (props.isOpen ? props.order * 30 : 0)}px);
  
  display: flex;
  background-color: #e9e9e9;
  position: relative;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;
  -webkit-user-drag: none;
  font-weight: bold;
  color: #f1f1f1;
  width: 56px;
  height: 56px;
`;


class ChildButton extends Component {
  render() {
    const { iconButton, ...other } = this.props;
    const IconButton = iconButton;

    return (
      <Wrapper {...other}>
        <a>
          <IconButton />
        </a>
      </Wrapper>
    );
  }
}

ChildButton.propTypes = {
  iconButton: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ChildButton;
