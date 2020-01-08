import React, { useContext, } from 'react'
import { Card, CardContainer, } from './styled'
import deleteBeer from './utility/deleteBeer'
import { BeerContext, } from '../context'
import { CardImage, CardName, CardInfoSection, CardInfoBox, } from './styled/Card'
const BeerCard = ({ beer, onClick, viewType, }) => {
  const { name, ABV, type, img, brewery, amount, description, } = beer
  const { setBeers, } = useContext(BeerContext)
  const removeBeer = () => { deleteBeer(beer); setBeers(prev => prev.filter(ele => ele.id !== beer.id)) }
  const truncate = (str) => {
    let i = 150
    let curr = str[i]

    while (curr && !curr.match(/[\s.,]/)) {
      i++
      curr = str[i]
    }
    const truncatedStr = i < str.length ? str.slice(0, i) + '...' : str
    return truncatedStr
  }
  return (
    <>
    <Card onClick={onClick}>
      {viewType !== 'search' &&
          <button onClick={removeBeer}>remove</button>
      }
      <CardImage src={img} alt={name} />
      <CardContainer >
        <CardName><b>{name}</b></CardName>
        <h4>{brewery}</h4>
        {description && <p>{truncate(description)}</p>}
        <CardInfoSection>
          <CardInfoBox>
            <p>{ABV}%</p>
          </CardInfoBox>
          <CardInfoBox style={{ flex: 2, }}>
            <p>{type}</p>
          </CardInfoBox>
          {viewType !== 'search' &&
          <CardInfoBox>
            <p>quantity: {amount}</p>
          </CardInfoBox>
          }
        </CardInfoSection>
      </CardContainer>
    </Card>
    </>
  )
}

export default BeerCard
