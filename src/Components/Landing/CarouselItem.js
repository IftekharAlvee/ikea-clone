import React from 'react';

const CarouselItem = (props) => {
    const {id, name, imageUrl, model, price, review} = props.product;
    return (
        
            <div class="carousel-item">
                <div class="d-flex justify-content-center">
                <img src={imageUrl} class="d-block" alt="..."/>
                </div>
                <div class="d-flex justify-content-center text-center text-dark p-2">
                    <div>
                    <h5>{name}</h5>
                    <small>{model}"</small>
                    <h4 class="card-title">${price}.00</h4>
                    </div>
                </div>
            </div>
    );
};

export default CarouselItem;