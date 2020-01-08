import styled from 'styled-components'
import { denim, marigold, sky, brightCoral, steel, } from './colors'

export const Nav = styled.nav`
  color: ${steel};
  display:flex;
  justify-content:space-evenly;
  height:10vh;
`
export const NavItem = styled.div`
  padding-right: 5px;
  padding-left: 5px;
`
export const NavText = styled.p`
  color: white;
  font-size: 2vh;
  font-family:playfair display;
  text-transform: uppercase;
`

export const NavImage = styled.img`
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
