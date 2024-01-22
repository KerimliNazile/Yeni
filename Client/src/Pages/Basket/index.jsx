import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
  const { basket, deleteBasket, increaseBasket, decreaseBasket } = useContext(BasketContext)
  return (
    <>
      <h1>Basket</h1>
      <div className="BasketArea">
        {basket && basket.map(x =>
          <ul>
            <li><img src={x.image} alt="" /></li>
            <li>{x.name}</li>
            <li><button onClick={() => deleteBasket(x)}>delete</button></li>
            <li><button onClick={() => increaseBasket(x)}>+</button></li>
            <p>{x.count}</p>
            <li><button onClick={() => decreaseBasket(x)}>-</button></li>

          </ul>

        )}
      </div>
    </>
  )
}

export default Basket