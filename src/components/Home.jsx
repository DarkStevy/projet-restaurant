import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export function Home() {
    const dispatch = useDispatch();

    dispatch({
        type: "PATH",
        nameClass: "headerHidden",
    })


    return (
        <main>
            <h1>Acceuil</h1>
            <p>Bonjour et bienvenue chez McDou veuillez cliquer sur commander pour choisir votre menu.</p>
            <Link to="/sandwich">Commander</Link>
        </main>
    )
}