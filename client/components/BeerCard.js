import React from 'react'

const styles = {
  card: { boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s', },
  container: { padding: '2px 16px', },
}

const BeerCard = ({ beer, onClick, }) => {
  const { name, ABV, type, img, brewery, amount, } = beer

  return (
    <div style={styles.card} onClick={onClick}>
      <img src={img} alt={name} />
      <div style={styles.container}>
        <h4><b>{name}</b></h4>
        <h4>{brewery}</h4>
        <p>{ABV}</p>
        <p>{type}</p>
        <p>{amount}</p>
      </div>
    </div>
  )
}

export default BeerCard
