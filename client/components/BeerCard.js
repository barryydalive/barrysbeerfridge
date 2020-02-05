import React, { useContext, } from 'react'
import { Card, CardContainer, } from './styled'
import { CardImage, CardName, CardInfoSection, CardInfoBox, CardButton, } from './styled/Card'
import { BeerContext, } from '../context'
import drinkABeer from './utility/drinkABeer'
import truncate from './utility/truncate'
import { Form, } from 'formik'
const BeerCard = ({ beer, onClick, viewType, }) => {
  const { name, ABV, type, img, brewery, amount, description, } = beer
  const { setBeers, } = useContext(BeerContext)

  const handleDrinkABeer = async (e) => {
    e.stopPropagation()
    const updatedBeer = await drinkABeer(beer)
    setBeers(prev => prev.map(ele => { if (ele.id === updatedBeer.id) { return updatedBeer } return ele }))
  }

  return (
    <>
    <Card onClick={onClick}>

      <CardImage src={img} alt={name} />
      <CardContainer >
        <CardName><b>{name}</b></CardName>
        <h4>{brewery}</h4>
        {description && <p>{truncate(description)}</p>}
        { viewType !== 'search' && <CardButton onClick={handleDrinkABeer}>Drink One</CardButton>
        }        <CardInfoSection>
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
