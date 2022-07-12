import React from 'react'
import Items from './Items';
import { useState, useEffect } from "react";
import axios from '../api/products';

function Trending() {
    //call api lay data de hien thi
    const [products,setProducts] = useState([]);
    useEffect(() => {
        //call api lay du lieu ve
        getAllProducts();
    }, []);
    async function getAllProducts() {
        try {
            const products = await axios.get("products");
            setProducts(products.data);
        } catch (error) {
            console.log('something was wrong');
        }
    }
    let showListElementProduct = products.map((product, index) => {
        return <Items key={index} product={product} ></Items>
    })
    return (
        <div>
            <div>
                <section className="h-t-products1 section-t-padding section-b-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="section-title">
                                    <h2>Trending products</h2>
                                </div>
                                <div className="trending-products owl-carousel owl-theme">
                                    {showListElementProduct}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Trending
