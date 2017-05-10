import React, { Component } from 'react';
import styled from 'styled-components';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import { FloatingMenu } from './FloatingMenu';
import { MainButton } from './MainButton';
import { ChildButton } from './ChildButton';

const StyledFloatingMenu = styled(FloatingMenu)`
  margin-right: 80px;
  margin-bottom: 30px;
`;

const Contanier = styled.div`
  display: flex;
`;

const SampleBox = styled.div`
  display: flex;
  background: black;
  width: 500px;
  height: 300px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

class App extends Component {
  state = {
    isClicked: false,
  };

  render() {
    return (
      <Contanier>
        <h2>Hello, World</h2>
        <SampleBox>
          <StyledFloatingMenu slideSpeed={500} direction="right">
            <MainButton
              iconResting={MdAdd}
              iconActive={MdClose}
              iconColor="#ff1744"
              backgroundColor="white"
              buttonSize="56"
            />
            <ChildButton
              iconButton={MdAdd}
              order={1}
              backgroundColor="white"
              buttonSize="56"
            />
            <ChildButton
              iconButton={MdAdd}
              order={2}
              backgroundColor="white"
              buttonSize="56"
            />
          </StyledFloatingMenu>
        </SampleBox>
      </Contanier>
    );
  }
}

export default App;
