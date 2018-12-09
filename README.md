# React Floating Button Menu

A Material floating button menu

Inspired by [react-material-floating-button](https://github.com/nobitagit/react-material-floating-button)

## TODO

- [x] Add sliding trasition (WIP)
- [x] Remove pointer cursor when ChildButton is not visible
- [ ] Only rotate icon not whole button
- [ ] You suggest!

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
import MdAdd from '@material-ui/icons/add';
import MdClose from '@material-ui/icons/clear';


state = {
  isOpen: false,
}
...
  <FloatingMenu
    slideSpeed={500}
    direction="up"
    spacing={8}
    isOpen={this.state.isOpen}
  >
    <MainButton
      iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
      iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
      backgroundColor="black"
      onClick={() => this.setState({ isOpen: !this.state.isOpen })}
      size={56}
    />
     <ChildButton
      icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
      onClick={() => console.log('First button clicked')}
    />
    <ChildButton
      icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
    />
    <ChildButton
      icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
      backgroundColor="white"
      size={40}
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
