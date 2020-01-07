import React, { useState, } from 'react'
import { useFormik, } from 'formik'
import axios from 'axios'
import BeerCard from './BeerCard'
import SelectBeerModal from './SelectBeerModal'
const slugify = (str) => {
  return str.replace(/\s/g, '+')
}

const formatBeerFromUntappd = (beerFromUntappd, brewery) => {
  const beer = {
    name: beerFromUntappd.beer_name,
    ABV: beerFromUntappd.beer_abv,
    type: beerFromUntappd.beer_style,
    brewery: brewery.brewery_name,
    amount: beerFromUntappd.beer_style,
    img: beerFromUntappd.beer_label,
    untappdId: beerFromUntappd.bid,
  }
  return beer
}
const Search = () => {
  const [ beers, setBeers, ] = useState([])
  const [ selectedBeer, setSelectedBeer, ] = useState({})
  const [ modalOpen, setModalOpen, ] = useState(false)
  const searchUntappd = async (values) => {
    const searchQuery = slugify(values.searchString)
    try {
      console.log('searchQuery:', searchQuery)
      const res = await axios.get(`/api/untappd?searchQuery=${searchQuery}`)
      const beers = res.data
      setBeers(beers.items)
    } catch (err) {
      console.log(err)
    }
  }
  const formik = useFormik({
    initialValues: { searchString: '', quantity: 0, },
    onSubmit: searchUntappd, handleAdd: (values) => {
      console.log('values:', values)
    }, })

  const selectBeer = (beer) => {
    setSelectedBeer(beer)
    setModalOpen(true)
  }
  console.log('modalOpen:', modalOpen)
  return (
    <>
    <h1>SEARCH</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='searchString'>Name</label>
      <input
        id='searchString'
        name='searchString'
        type='text'
        onChange={formik.handleChange}
        value={formik.values.searchString}
      />
      <button type='submit'>Search</button>
    </form>

    {beers.map(({ beer, brewery, }) => {
      const formattedBeer = formatBeerFromUntappd(beer, brewery)
      return <BeerCard key={formattedBeer.untappdId} beer={formattedBeer} onClick={() => selectBeer(formattedBeer)} />
    })}
    <SelectBeerModal modalOpen={modalOpen} setModalOpen={setModalOpen} selectedBeer={selectedBeer}></SelectBeerModal>
    </>
  )
}

export default Search
