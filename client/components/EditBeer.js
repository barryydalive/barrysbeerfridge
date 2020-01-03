import React, { useContext, } from 'react'
import { useFormik, } from 'formik'
import axios from 'axios'
import { BeerContext, } from '../context'

const EditBeer = ({ beer, toggleEdit, }) => {
  const { setBeers, } = useContext(BeerContext)

  const editBeer = async (values) => {
    try {
      const { data, } = await axios.put(`/api/beers/${beer.id}`, values)
      setBeers(prevState => prevState.map(ele => { if (ele.id === beer.id) { return data } return ele }))
      toggleEdit()
    } catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik({
    initialValues: beer,
    onSubmit: values => {
      values.type = values.kind
      editBeer(values)
    },
  })

  return (
    <li>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor='brewery'>Brewery</label>
        <input
          id='brewery'
          name='brewery'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.brewery}
        />
        <label htmlFor='ABV'>ABV</label>
        <input
          id='ABV'
          name='ABV'
          type='number'
          step='.01'
          onChange={formik.handleChange}
          value={formik.values.ABV}
        />
        <label htmlFor='img'>img</label>
        <input
          id='img'
          name='img'
          type='url'
          onChange={formik.handleChange}
          value={formik.values.img}
        />
        <label htmlFor='kind'>kind</label>
        <input
          id='kind'
          name='kind'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.kind}
        />
        <label htmlFor='amount'>amount</label>
        <input
          id='amount'
          name='amount'
          type='number'
          onChange={formik.handleChange}
          value={formik.values.amount}
        />
        <button type='submit'>Submit</button>
      </form>
    </li>)
}

export default EditBeer
