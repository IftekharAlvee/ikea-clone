import React from 'react';
import Hero from './Hero';
import Product from './Product';
import productData from '../../Data/data.json';
import Products from './Products';

const Landing = () => {

    return (
        <div>
            <Hero></Hero>
            <Product productData={productData}></Product>
            <div class="my-5 py-5 container">
                <h4>Recommended for you</h4>
                <div class="mt-5">
                <Products></Products>
                </div>
            </div>
        </div>
    );
};

export default Landing;