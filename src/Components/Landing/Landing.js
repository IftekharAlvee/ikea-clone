import React from 'react';
import Hero from './Hero';
import Product from './Product';
import productData from '../../Data/data.json';
import Products from './Products';
import Footer from './Footer';
import Nav2 from './Nav2';

const Landing = () => {

    return (
        <div>
            <Hero></Hero>
            <div class="container my-2">
                <Nav2></Nav2>
            </div>
            <Product productData={productData}></Product>
            <div class="my-5 py-5 container">
                <h4>Recommended for you</h4>
                <div class="mt-5">
                <Products></Products>
                </div>
            </div>
            <div class="bg-light p-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Landing;