import styled from 'styled-components'
import posed from 'react-pose'
import { steel, denim, marigold, brightCoral, golden, sky, button, main, } from './colors'

export const BeerModal = styled.div`
  display: flex;
  min-height: 50vh;
  flex-wrap: wrap;
  font-family: 'Roboto', monospace;
  align-items: center;
  justify-content: center;
  background-color: ${main};
  padding: 10px;
`

export const BeerModalImg = styled.img`
  display:block;
  height: 60%;
  max-width:500px;
  max-height: 500px;
`

export const BeerModalInfo = styled.div`
  display:flex;
  flex-direction: column;
  width:50%;
  justify-content: center;
  padding: 25px
`

export const BeerModalButtonDiv = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  width: 100%;
`

export const BeerModalButton = styled(posed.button({
  hoverable: true,
  init: { scale: 1, },
  hover: { scale: 1.1, },
}))`
  border:none;
  background-color: ${button};
  height:10vh;
  color: white;
  font-family: 'Roboto', monospace;
  font-weight: 500;
  box-sizing: border-box;
  text-transform: uppercase;
  margin: 10px;
  font-size: medium;

`
