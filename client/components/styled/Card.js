import styled from 'styled-components'
import { lightBackground, button, } from './colors'
import posed from 'react-pose'

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: '0.3s;
  height: 60vh;
  width: 18vw;
  max-width: 275px;
  display:  flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 1.5vh;
  margin-right: 1vw;
  border-radius: $border-radius-size + 5;
  position: relative;
  text-align: center;
  background-color: ${lightBackground};
`

export const CardImage = styled.img`
  position: relative;
  height: 40%;
  width:100%
  max-width: 100%;
  border-top-left-radius: $border-radius-size;
  border-top-right-radius: $border-radius-size;
`
export const CardName = styled.h4`
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
  margin-top: 5px;
`

export const CardInfoSection = styled.div`
  background-color: ${lightBackground};
  display:flex;
  position: absolute;
  bottom:0px;
  left:0;
  width:100%;
`

export const CardInfoBox = styled.div`
  flex:1;
  border: 1px solid black;
`
export const CardContainer = styled.section`
  padding: 2px 16px;
`

export const CardButton = styled(posed.button({
  hoverable: true,
  init: { scale: 1, },
  hover: { scale: 1.1, },
}))`
  border:none;
  background-color: ${button};
  height:10%;
  color: white;
  font-family: 'Roboto', monospace;
  font-weight: 500;
  box-sizing: border-box;
  text-transform: uppercase;
  font-size: medium;

`
