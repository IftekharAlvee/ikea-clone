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
                    <i class="nav-link" aria-current="page" href="#">Compare</i>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <i class="nav-link" href="#">Sort</i>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <i class="nav-link" href="#">size</i>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <i class="nav-link" href="#">Color</i>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                    <i class="nav-link" aria-current="page" href="#">Category</i>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <i class="nav-link" href="#">Material</i>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <i class="nav-link" href="#">Price</i>
                </li>
                <li class="nav-item btn btn-light rounded-pill">
                <i class="nav-link" href="#">All filter</i>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default Nav2;