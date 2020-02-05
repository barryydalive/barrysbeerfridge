import styled from 'styled-components'
import { steel, background, button, } from './colors'
import posed from 'react-pose'

export const Nav = styled.nav`
  display:flex;
  justify-content:space-evenly;
  height:10vh;
  background-color: ${background};
`
export const NavItem = styled.div`
  padding-right: 5px;
  padding-left: 5px;
`
export const NavText = styled.p`
  color:white;
  font-size: 2vh;
  font-family:playfair display;
  text-transform: uppercase;
  &:hover{
    color: ${button}
  }
`

export const NavImage = styled(posed.img({
  hoverable: true,
  init: { rotate: '0deg',
    transition: {
      duration: 300,
      ease: 'linear',
    }, },
  hover: {
    rotate: '360deg',
    transition: {
      duration: 500,
    },
  },

}))`
  max-height: 100%;
  width:auto;
  object-fit: contain;
`

export const NavLeft = styled.div`
  display:flex;
  flex:1;
`
export const NavCenter = styled.div`
  display:flex;
  justify-content:center;
  flex:3;
  text-align:center;
  align-items: center;
`
export const NavRight = styled.div`
  display:flex;
  flex:1;
  justify-content: space-around;
  text-align:center;
  align-items:center;
`
