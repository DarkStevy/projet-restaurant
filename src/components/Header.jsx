import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header() {
    const state = useSelector(function(state) {
        return state;
    });
    
    return(
        <header className={state.headerReduce.class}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sandwich">Sandwich</Link>
                    </li>
                    <li>
                        <Link to="/drinks">Boissons</Link>
                    </li>
                    <li>
                        <Link to="/desserts">Desserts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}