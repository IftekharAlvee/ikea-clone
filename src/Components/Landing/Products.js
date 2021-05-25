import React from 'react';
import products from '../../Data/data.json'
import CarouselItem from './CarouselItem';

const Products = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="d-flex justify-content-center">
                <img src={products[10].imageUrl} class="d-block" alt="..."/>
                <div class=" justify-content-center text-center text-dark p-2">
                    <div>
                    <h5>{products[10].name}</h5>
                    <small>{products[10].model}"</small>
                    <h4 class="card-title">${products[10].price}.00</h4>
                    </div>
                </div>
                </div>
            </div>
            {
                products?.map(product=> <CarouselItem product={product}></CarouselItem>)
            }
            
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span style={{backgroundColor:"black"}} class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span style={{backgroundColor:"black"}} class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    );
};

export default Products;