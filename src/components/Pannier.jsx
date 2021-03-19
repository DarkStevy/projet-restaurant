import { useDispatch, useSelector } from 'react-redux';
import { order } from '../functions/oder';
import { arraySandwich } from '../products/arraySandwich';
import { Summary } from './Summary';

export default function Pannier() {
    const dispatch = useDispatch();
    const state = useSelector(function(state) {
        return state;
    });

    const arrayProduct = arraySandwich;

    /**
     * Permet de supprimer tout le panier
     */
    function deletePannier() {
        dispatch({
            type: "RESET"
        })
    }

    /**
    * Cette méthode ajoute un article au panier
    * @param statePannier de type Array, qui correspond au tableau du produit selectionner dans le pannier
    * @param calc de type String, qui correspond au signe + ou - ce qui permet de soustraire ou d'additionner le prix
    * @param count de type Number, qui correspond à la quantité de l'article que l'on souhaite ajouter ou supprimer au panier.
    * @param deleteProduct de type String, qui correspond à la fonction à executer. Renvoi delete si on supprime un produit ou none pour ne pas supprimer 
    */
    function clickProductOrder(statePannier, calc, count, deleteProduct) {
        const {category, keyProduct, name, price} = statePannier
        const {price: priceProduct} = arrayProduct[category][keyProduct];
        const { pannier, total } = order(name, count, priceProduct, price, keyProduct, calc, deleteProduct)

        dispatch(pannier);
        dispatch(total);
    }

    function openSummary() {
        dispatch({
            type: "CLASSSUMMARY",
            nameClassSummary: "summary",
            nameClassOverlaySummary : "overlaySummary"
        })
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
            {
                (state.total.total > 0 ) && (
                    <button onClick={openSummary}>Commander</button>
                )
            }
        </div>
    )
}