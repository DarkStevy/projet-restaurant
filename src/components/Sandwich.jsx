import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../functions/oder';
import { arraySandwich } from '../products/arraySandwich';
import Pannier from './Pannier';


export function Sandwich() {
    const dispatch = useDispatch();
    const burger = arraySandwich.burgers
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
        let {name, price} = burger[index];

        dispatch(order(name, count, price, "", index, "+", "none").pannier)
        dispatch(order(name, count, price, "", index, "+", "none").total)
        
    }

    return (
        <main>
            <div id="commande">
            <section>
                    <div>
                        <h2>Nos burgers</h2>
                    </div>
                    <div>
                        {burger.map((value, index) => (
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