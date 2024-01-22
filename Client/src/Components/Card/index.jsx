import React, { useContext } from 'react'
import { RiShoppingBasketLine } from "react-icons/ri";
import './index.scss'
import { BasketContext } from '../../context/BasketContext';
const Card = ({ image, name, id, product }) => {
    const { addBasket } = useContext(BasketContext)
    return (
        <>
            <div className="CardArea">
                <div className="CardBox">
                    <div className="CardImage">
                        <img src={image} alt="" />
                    </div>
                    <div className="CardText">
                        <h1>{name}</h1>
                    </div>
                    <div className="CardIcon">
                        <div onClick={() => addBasket(product)}><RiShoppingBasketLine /></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card