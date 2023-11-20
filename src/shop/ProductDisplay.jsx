import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."



const ProductDisplay = ({item}) => {
    // console.log(item)
    const {name, id, price, seller, ratingsCount, quantity, img} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState ("");
    const [size, setSize] = useState("Selecciona tu talle");
    const [color, setColor] = useState("Colores");

    const handleSizeChange = (e) => {
      setSize(e.target.value);
    }
    const handleColorChange = (e) => {
      setColor(e.target.value);
    }
    
    const handleDecrease =() => {
        if(prequantity > 1) {
          setQuantity(prequantity - 1)
        }
    }
    const handleIncrease =() => {
      setQuantity(prequantity + 1)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const product = {
        id: id,
        img: img,
        name: name,
        price: price,
        quantity: prequantity,
        size: size,
        color: color,
        coupon:coupon
      }
      const existingCart = JSON.parse(localStorage.getItem("cart") || '[]');

      const existingProductIndex = existingCart.findIndex((item) => item.id == id);
      
      if(existingProductIndex !== -1){
        existingCart[existingProductIndex].quantity += prequantity;
      }else{
        existingCart.push(product);
      }
        localStorage.setItem("cart", JSON.stringify(existingCart));

        setQuantity(1);
        setSize("Selecciona tu talle");
        setColor("Color");
        setCoupon("");

    }


  return (
    <div>
        <div>
                <h4>{name}</h4>
                <p className='raiting'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h4>{seller}</h4>
                <p>{desc}</p>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className='select-product size'>
              <select value={size} onChange={(handleSizeChange)}>
                <option>Talles</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <i className='icofont-rounded-down'></i>
            </div>
            {/*color*/}
            <div className='select-product color'>
            <select value={color} onChange={handleColorChange}>
                <option>Colores</option>
                <option>Negro</option>
                <option>Gris</option>
                <option>Blanco</option>
              </select>
              <i className='icofont-rounded-down'></i>
            </div>

            <div className='cart-plus-minus'>
              <div className='dec qtybutton' onClick={handleDecrease}>-</div>
              <input className="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value=
              {prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))}/>
              <div className='inc qtybutton' onClick={handleIncrease}>+</div>
            </div>

            <div className='discount-code mb-2'>
              <input type="text" placeholder='Cupón de descuento' onChange={(e) => setCoupon(e.target.value)}/>
            </div>

            <button type='submit' className='lab-btn bg-warning'>
                <span>Agregar al carrito</span>
            </button>
            <Link to="/cart-page" className='lab-btn bg-warning'>
                <span>Comprar</span>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default ProductDisplay