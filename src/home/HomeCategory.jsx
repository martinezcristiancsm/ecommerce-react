import React from 'react'
import { Link } from 'react-router-dom';
const subTitle = "Elegí el producto que necesites";
const title = "Envios gratis a partir de $50.000";
const btnText = "Comprar";

const categoryList = [
{
imgUrl: '../../src/assets/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Zapatillas de hombre',
},
{
imgUrl: '../../src/assets/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
title: 'Remeras',
},
{
imgUrl: '../../src/assets/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Pantalones',
},
{
imgUrl: '../../src/assets/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Gorras',
},
{
imgUrl: '../../src/assets/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Mochilas y bolsos',
},
{
imgUrl: '../../src/assets/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Accesorios',
},
]

const HomeCategory = () => {
  return (
    <div className="category-section style-4 padding-tb">
        <div className="container">
            {/* header*/}
            <div className="section-header text-center">
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>
                {/*cards*/}
                <div className='section-wrapper'>
                    <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val, i) => (<div key={i} className='col'>
                            <Link to="/shop" className="category-item">
                                <div className="category-inner">
                                    <div className="category-thumb">
                                        <img src={val.imgUrl} alt="" />
                                    </div>

                                    <div className="category-content">
                                      <Link to="/shop"><h6>{val.title}</h6></Link>
                                    </div>

                                </div>
                            </Link>
                        </div>))
                    }
                </div>
                <div className="text-center mt-5">
                    <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
                </div>
        </div>
    </div>
    </div>
  )
}

export default HomeCategory