import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../functions/oder';
import { arraySandwich } from '../products/arraySandwich';
import Pannier from './Pannier';

export function Drinks() {
    const dispatch = useDispatch();
    const drinks = arraySandwich.drinks
    const state = useSelector(function(state) {
        return state;
    });

    useEffect(() => {
        if(state.headerReduce.class !== "headerVisible") {
            dispatch({
                    type: "PATH",
                    nameClass: "headerVisible",
                })
        }
    }, []);

    function addOrder(index, count) {
        let {name, price} = drinks[index];
        
        dispatch(order(name, count, price, "", index, "+", "none").pannier)
        dispatch(order(name, count, price, "", index, "+", "none").total)
    }

    return (
        <main>
            <div id="commande">
                <section>
                    <div>
                        <h2>Nos boissons</h2>
                    </div>
                    <div>
                        {drinks.map((value, index) => (
                            <div key={index}>
                                <p>{value.name}</p>
                                <figure>
                                    <img src={value.img} alt={value.name} />
                                </figure>
                                <p>{value.price}€</p>
                                <button onClick={() => addOrder(index, 1)}>Commander</button>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <Pannier/>
                </section>
            </div>
        </main>
    )
}