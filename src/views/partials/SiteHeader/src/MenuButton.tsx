
import React from 'react'
import { StyledMenuButton } from '../styles'

interface MenuButtonProps {
  onClick?: () => void
  isMenuOpen: boolean
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick = () => { }, isMenuOpen }) => {
  return (
    <StyledMenuButton onClick={onClick} $isOpen={isMenuOpen}>
          <span></span>
          <span></span>
      </StyledMenuButton>
  )
}

export default MenuButton