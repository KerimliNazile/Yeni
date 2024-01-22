import React, { useEffect, useState } from 'react'
import './index.scss'
import Card from '../Card'
const Products = () => {
    const [product, setProduct] = useState([])
    async function getProduct() {
        const data = await fetch("http://localhost:5000/shells")
        const res = await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <section id='Products'>
                <div className="ProductArea">
                    <div className="CardBoxProduct">
                        {product && product.map((item) => (


                            <Card key={item._id} id={item._id} name={item.name} image={item.image} product={item} />

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products