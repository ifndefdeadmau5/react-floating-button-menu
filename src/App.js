import React, { Component } from 'react';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import { FloatingMenu } from './FloatingMenu';
import { MainButton } from './MainButton';
import { ChildButton } from './ChildButton';

class App extends Component {
  state = {
    isClicked: false,
  }

  render() {
    return (
      <div>
        <h2>Hello, World</h2>
        <FloatingMenu background="red" sliderSpeed={500}>
          <MainButton iconResting={MdAdd} iconActive={MdClose} />
          <ChildButton iconButton={MdAdd} order={1} />
          <ChildButton iconButton={MdAdd} order={2} />
        </FloatingMenu>
      </div>
    );
  }
}

export default App;
