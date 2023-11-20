import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';

const showResults = "Mostrando 1 - 12 de 139 Resultados"
import Data from ".././../public/products.json"
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setproducts] = useState(Data);
    console.log(products);

    // pags

    const [currentPage, setcurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // cambio de pagina

    const paginate = (pageNumber) => {
        setcurrentPage(pageNumber)
    }

    // filter products
const [selectedCategory,setSelectedCategory] = useState("All");
const menuItems = [...new Set(Data.map((Val) => Val.category))];

const filterItem = (curcat) => {
    const newItem = Data.filter ((newVal) => {
        return newVal.category === curcat;
    })

    setSelectedCategory(curcat);
    setproducts(newItem);
}
    return (
    <div>
        <PageHeader title="Nuestra tienda" curPage="Tienda"/>

        {/*tienda*/}
        <div className="shop-page padding-tb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <article>
                            <div className="shop-title d-flex flex-wrap justify-content-between">
                                <p>{showResults}</p>
                            </div>
                            <div>
                                <ProductCards GridList={GridList} products={currentProducts}/>
                            </div>
                            <Pagination
                            productsPerPage={productsPerPage}
                            totalProducts = {products.length}
                            paginate={paginate}
                            activePage={currentPage}
                            />
                        </article>
                    </div>
                    <div className="col-lg-4 col-12">
                        <aside>
                            <Search products={products} GridList={GridList} />
                            <ShopCategory
                            filterItem={filterItem}
                            setItem={setproducts}
                            menuItems={menuItems}
                            setProducts={setproducts}
                            selectedCategory={selectedCategory}
                            />
                        </aside>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop