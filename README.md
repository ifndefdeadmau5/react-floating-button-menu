# React Floating Button Menu

A Material floating button menu implementation made with styled-component &amp; react

Inspired by [react-material-floating-button](https://github.com/nobitagit/react-material-floating-button)

## Installation

> npm install react-floating-button-menu --save

## Demo

See the [project page](https://ifndefdeadmau5.github.io/react-floating-button-menu/)

<img src="https://media.giphy.com/media/3o7bu7E67NHt6tOuKA/giphy.gif">

## Usage

You can customize opening direction, speed, and styles of each button via props. Other options will be added soon
```javascript
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu/build';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';

...
  <FloatingMenu slideSpeed={500} direction="left">
    <MainButton
      iconResting={MdAdd}
      iconActive={MdClose}
      iconColor="white"
      backgroundColor="black"
      buttonSize="56"
    />
    <ChildButton
      iconButton={MdAdd}
      iconColor="black"
      order={1}
      backgroundColor="white"
      buttonSize="56"
    />
    <ChildButton
      iconButton={MdAdd}
      iconColor="black"
      order={2}
      backgroundColor="white"
      buttonSize="56"
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
