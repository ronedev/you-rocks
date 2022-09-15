import React from 'react'

const MenuIcon = ({isOpen}) => {
  return (
    <div id='iconMenu'>
        <span className={isOpen ? 'linea1 close' : 'linea1 open'}></span>
        <span className={isOpen ? 'linea2 close' : 'linea2 open'}></span>
        <span className={isOpen ? 'linea3 close' : 'linea3 open'}></span>
    </div>
  )
}

export default MenuIcon