import React, { useState } from 'react'
import MdAdd from '@material-ui/icons/Add'
import MdClose from '@material-ui/icons/Clear'
import MdEdit from '@material-ui/icons/Edit'
import MdStar from '@material-ui/icons/Star'
import MdFavorite from '@material-ui/icons/Favorite'
import {
  MainButton,
  ChildButton,
  FloatingMenu
} from 'react-floating-button-menu'
import 'react-floating-button-menu/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <FloatingMenu slideSpeed={500} isOpen={isOpen} spacing={8}>
        <MainButton
          isOpen={isOpen}
          iconResting={<MdAdd style={{ fontSize: 20 }} />}
          iconActive={<MdClose style={{ fontSize: 20 }} />}
          background='linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
          size={56}
        />
        <ChildButton
          icon={<MdEdit style={{ fontSize: 20 }} />}
          background='linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          size={40}
          onClick={() => console.log('First button clicked')}
        />
        <ChildButton
          icon={<MdFavorite style={{ fontSize: 20 }} />}
          background='linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          size={40}
        />
        <ChildButton
          icon={<MdStar style={{ fontSize: 20 }} />}
          background='linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          size={40}
        />
      </FloatingMenu>
    </div>
  )
}

export default App
