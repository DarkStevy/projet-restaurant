import essaie from "./price"

export default function productsPannier(state, action, name, category) {
    if(action.deleteProduct === "delete"){
        return {
            ...state,
            [name]: {
                name: "test",
                price: 0,
                counter: 0,
                category: category,
                keyProduct: "0",
            },
            
        }
    } else {
        return {
            ...state,
            [name]: {
                name: action.name,
                price: essaie(state[name], (state[name] === undefined) ? 0 : state[name].price, action.price, action.calc),
                counter: ((state[name] === undefined) ? 0 : state[name].counter) + action.counter,
                category: category,
                keyProduct: action.keyProduct,
            },
            
        }
    }
}