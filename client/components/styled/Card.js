import styled from 'styled-components'

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: '0.3s;
  width: 300px;
  display:  flex;
  flex-wrap:wrap;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
  border-radius: $border-radius-size + 5;
  position: relative;
  text-align: center;
  background-color: #c4c7ce;
`

export const CardImage = styled.img`
  position: relative;
  height: 230px;
  max-width: 100%;
  margin-bottom: 35px;
  border-top-left-radius: $border-radius-size;
  border-top-right-radius: $border-radius-size;
`
export const CardName = styled.h4`
  font-size: 26px;
  color: black;
  font-weight: 900;
  margin-bottom: 5px;
`

export const CardInfoSection = styled.div`
  background-color: lightgrey;
  display:flex;
`

export const CardInfoBox = styled.div`
  flex:1;
  border: 1px solid black;
`
export const CardContainer = styled.section`
  padding: 2px 16px;
`
