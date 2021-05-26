import React from 'react';

const Nav2 = () => {
    return (
        <nav class="navbar navbar-expand-lg  navbar-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item btn btn-light rounded-pill">
                    <a class="nav-link" aria-current="page" href="#">Compare</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <a class="nav-link" href="#">Sort</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <a class="nav-link" href="#">size</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <a class="nav-link" href="#">Color</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                    <a class="nav-link" aria-current="page" href="#">Category</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <a class="nav-link" href="#">Material</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <a class="nav-link" href="#">Price</a>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <a class="nav-link" href="#">All filter</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Nav2;