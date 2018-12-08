# React Floating Button Menu

A Material floating button menu

Inspired by [react-material-floating-button](https://github.com/nobitagit/react-material-floating-button)

## Installation

> npm install react-floating-button-menu --save

## Demo

See the [project page](https://ifndefdeadmau5.github.io/react-floating-button-menu/)

## Usage

You can customize opening direction, speed, and styles of each button via props. Other options will be added soon
```javascript
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from 'react-floating-button-menu';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';


state = {
  isOpen: false,
}
...
  <FloatingMenu
    slideSpeed={500}
    direction="up"
    isOpen={this.state.isOpen}
  >
    <MainButton
      iconResting={MdAdd}
      iconActive={MdClose}
      iconColor="white"
      backgroundColor="black"
      size={56}
      onClick={() => this.setState({ isOpen: !this.state.isOpen })}
    />
    <ChildButton
      iconButton={MdAdd}
      iconColor="black"
      backgroundColor="white"
      size={56}
    />
    <ChildButton
      iconButton={MdAdd}
      iconColor="black"
      backgroundColor="white"
      size={56}
    />
  </FloatingMenu>
...
```

## Try the Demos Locally
```sh
git clone https://github.com/ifndefdeadmau5/react-floating-button-menu.git
cd react-floating-button-menu
npm install
cd docs
npm install
npm start
```

## Contributing
Please submit issues.
