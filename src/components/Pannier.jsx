import { useDispatch, useSelector } from 'react-redux';
import { order } from '../functions/oder';
import { arraySandwich } from '../products/arraySandwich';

export default function Pannier() {
    const dispatch = useDispatch();
    const state = useSelector(function(state) {
        return state;
    });

    const arrayProduct = arraySandwich;

    function deletePannier() {
        dispatch({
            type: "RESET"
        })
    }

    function clickProductOrder(pannier, calc, count, deleteProduct) {
        let {category, keyProduct, name, price} = pannier
        let {price: priceProduct} = arrayProduct[category][keyProduct];

        dispatch(order(name, count, priceProduct, price, keyProduct, calc, deleteProduct).pannier)
        dispatch(order(name, count, priceProduct, price, keyProduct, calc, deleteProduct).total)
    }

    return (
        <div>
            {
                Object.entries(state.pannier).map((value, index) => (
                    <div key={index}>
                    {(value[1].price !== 0 && value[1].price !== undefined) && (
                        <>
                        <p>{value[1].name}</p>
                        <p>{Math.round(value[1].price * 100) / 100}€</p>
                        <button onClick={() => clickProductOrder(value[1], "-", -1, "none")}>-</button>
                        <span>{value[1].counter}</span>
                        <button onClick={() => clickProductOrder(value[1], "+", 1, "none")}>+</button>
                        <button onClick={() => clickProductOrder(value[1], "-", "", "delete")}>supprimer</button>
                        </>
                    )}
                        
                    </div>
                ))
            }
            <p>Total : {Math.round(state.total.total * 100) / 100}€</p>
            <button onClick={() => deletePannier()}>Annuler ma commande</button>
        </div>
    )
}