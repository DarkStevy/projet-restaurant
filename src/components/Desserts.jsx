import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { order } from '../functions/oder';
import { arraySandwich } from '../products/arraySandwich';
import Pannier from './Pannier';

export function Desserts() {
    const dispatch = useDispatch();
    const desserts = arraySandwich.desserts
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
    }, [state.headerReduce.class, dispatch]);

    /**
    * Cette méthode ajoute un article au panier
    * @param index de type Number, qui correspond à la position de l'article dans la liste des articles 
    **/
    function addOrder(index) {
        const {name, price} = desserts[index];
        const { pannier, total } = order(name, 1, price, "", index, "+", "none")
        dispatch(pannier);
        dispatch(total);
    }

    return (
        <main>
            <div id="commande">
            <section>
                    <div>
                        <h2>Nos desserts</h2>
                    </div>
                    <div>
                        {desserts.map((value, index) => (
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