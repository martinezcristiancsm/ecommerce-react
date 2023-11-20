import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import productData from ".././../products.json"
import SelectedCategory from '../components/SelectedCategory';

const title = 
    <h2>Encontra la mayor variedad de <span>productos</span>!</h2>;

    const desc = "Aprovechá nuestras ofertas!"
    const bannerList = [
      {
        iconName: "icofont-users-al-4",
        text: "Mas de 100.000 clientes por todo el país"
      },
      {
        iconName: "icofont-notification",
        text: "Mas de 2000 vendedores"
      },
      {
        iconName: "icofont-globe",
        text: "Encontrá lo que necesites en nuestro sitio!"
      },
    ];


const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setfilteredProducts] = useState(productData);
    //console.log(productData)


    // search function
    const handleSearch = e => {
        const searchTerm = e.target.value;
      setSearchInput(searchTerm);

      // filt products by search
      const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setfilteredProducts(filtered)
    }


  return (
    <div className="banner-section style-4">
        <div className="container">
            <div className="banner-content">
                {title};
                <form>
                  <SelectedCategory select={"all"}/>
                  <input type="text" name="search" id="search" placeholder="Buscar..." value={searchInput} onChange={handleSearch}/>
                  <button type="submit"><i className="icofont-search-1"></i></button>
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                  {
                    searchInput && filteredProducts.map((product, i) => <li key={i}>
                      <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li> )
                  }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Banner;