import React from 'react';
import Landing from '../Landing/Landing';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div>
            <div class="text-center text-white" style={{backgroundColor:"black"}}>
                    <p class="py-2">
                        <i class="p-2"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                        </svg>
                        </i>
                         <small>Updates on safe shopping in our stores</small></p>
                </div>
            <div class="container">
                <Navigation></Navigation>
            </div>
            <Landing></Landing>
        </div>
    );
};

export default Home;