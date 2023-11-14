import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from "../components/PageHeader"
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage'

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() =>{
    // fetch item pal storage
      const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setcartItems(storedCartItems);
  }, []);
  // calc precio total
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

    const handleIncrease = (item) => {
      item.quantity += 1;
      setcartItems([...cartItems])

      //update carrito
      localStorage.setItem("cart", JSON.stringify(cartItems));
    };
    
    
    const handleDecrease = (item) => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        setcartItems([...cartItems]);

        //update carrito
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    };

    // eliminar producto

    const handleRemoveItem = (item) => {
      const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

      setcartItems(updatedCart);

      updateLocalStorage(updatedCart);

    }


    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const cartSubtotal = cartItems.reduce((total, item) => {
      return total + calculateTotalPrice(item);
    }, 0)

    const orderTotal = cartSubtotal;

  return <div>
    <PageHeader title="Carrito" curPage={"Carrito"}/>

    <div className='shop-cart padding-tb'>
      <div className='container'>
        <div className='section-wrapper'>
          {/* carrito display*/}
          <div className='cart-top'>
            <table>
                <thead>
                  <tr>
                    <th className='cat-product'>Producto</th>
                    <th className='cat-product'>Precio</th>
                    <th className='cat-product'>Cantidad</th>
                    <th className='cat-product'>Total</th>
                    <th className='cat-product'>Editar</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    cartItems.map((item, indx) => (
                      <tr key={indx}>
                        <td className='product-item cat-product'>
                          <div className='p-thumb'>
                            <Link to="/shop"><img src={item.img} alt=""/></Link>
                          </div>
                          <div className='p-content'>
                              <Link to="/shop">{item.name}</Link>
                          </div>
                        </td>
                        <td className='cat-price'>$ {item.price}</td>
                        <td className='cat-quantity'>
                          <div className='cart-plus-minus'>
                              <div className='dec qtybutton'onClick={() => handleDecrease (item)}>-</div>
                              <input type="text" className='cart-plus-minus-box'
                              name="qtybutton" value={item.quantity}/>
                              <div className='inc qtybutton'onClick={() => handleIncrease (item)}>+</div>
                          </div>
                        </td>
                        <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                        <td className='cat-edit'>
                          <a href="#" onClick={() => handleRemoveItem(item)}>
                            <img src={delImgUrl} alt="" />
                          </a>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
            </table>
          </div>
          {/*termina display del carrito*/}
          {/* carrito checkout*/}
          <div className='cart-bottom'>
            <div className="cart-checkout-box">
              <form action="coupon">
                <input className='cart-page' type="text" name="coupon" id='coupon' placeholder='Cupón de descuento...'/>
                <input type="submit" value="Aplicar cupón"/>
              </form>

              <form className='cart-checkout'>
                  <input type="submit" value="Actualizar" />
                  <div>
                    <CheckOutPage/>
                  </div>
              </form>
            </div>
            {/* totals*/}
            <div className='shiping-box'>
              <div className='row'>
                <div className='col-md-6 col-12'>
                  <div className='calculate-shiping'>
                    <h3>Calcular Envio</h3>
                    <div class="d-flex align-items-start flex-column">
                    <input type="text" name='postalCode' id="postalCode" placeholder='Código Postal' className='cart-page-input-text'/>
                    <button type='submit'>Actualizar Envío</button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 col-12'>
                  <div className='cart-overview'>
                    <h3>Carrito:</h3>
                    <ul className='lab-ul'>
                      <li>
                        <span className='pull-left'>Subtotal</span>
                        <p className='pull-right'>${cartSubtotal}</p>
                      </li>
                      <li>
                        <span className='pull-left'>Envio</span>
                        <p className='pull-right'>Envio gratis!</p>
                      </li>
                      <li>
                        <span className='pull-left'>TOTAL</span>
                        <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default CartPage