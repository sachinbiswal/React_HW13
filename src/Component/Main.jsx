import React, { useEffect, useState } from 'react'
const Main = () => {

    const [products, setproducts] = useState([])
    useEffect(() => {
        const products = async()=>{
            const responce= await fetch("https://fakestoreapi.com/products")
            const data = await responce.json()
            console.log("hello",data);
            setproducts(data)
         }
         products()
    }, [])
    console.log(products);
  return (
    <div className='Product'>
     
    {products.map((ele) => {
        return (

            <>

                <div className="Card">
                    <div className="category">
                        <p>{ele && ele.category}</p>
                    </div>
                    <img src={ele && ele.image} alt="" />
                    <div className="title">
                        <p>{ele && ele.title}</p>
                    </div>

                    <p><span>PRICE :</span> $ {ele && ele.price} </p>


                    <button>Watch</button>

                </div >
            </>
        )
    })}
</div >
  )
}

export default Main