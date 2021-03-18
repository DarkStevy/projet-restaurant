import productsPannier from "../functions/productsPannier";

const initialStateProducts = {

}

const initialStateTotal = {
    total: 0,
}

export function products(state = initialStateProducts, action = {}) {

    switch (action.type) {
        case "CHEESEBURGER":
            return productsPannier(state, action, "CheeseBurger", "burgers");
            
        case "DOUBLECHEESEBURGER":
            return productsPannier(state, action, "DoubleCheeseBurger", "burgers");

        case "TRIPLECHEESEBURGER":
            return productsPannier(state, action, "TripleCheeseBurger", "burgers");

        case "BIGMOUC":
            return productsPannier(state, action, "BigMouc", "burgers");
 
        case "MOUCCHICKEN":
            return productsPannier(state, action, "MoucChicken", "burgers");
            
        case "COCACOLA":
            return productsPannier(state, action, "CocaCola", "drinks");
            
        case "ICETHEA":
            return productsPannier(state, action, "Icethea", "drinks");
            
        case "FANTA":
            return productsPannier(state, action, "Fanta", "drinks");
            
        case "EVIAN":
            return productsPannier(state, action, "Evian", "drinks");
            
        case "MOUCFLEURY":
            return productsPannier(state, action, "MoucFleury", "desserts");
            
        case "SUNDAY":
            return productsPannier(state, action, "Sunday", "desserts");
            
        case "COUCCOOKIE":
            return productsPannier(state, action, "MoucCookie", "desserts");
            
        case "RESET":
            return {
                initialStateProducts
            }
        default:
            return state
    }

}

export function total(state = initialStateTotal, action = {}) {
    switch (action.type) {
        case "TOTAL":
            return {
                total: (action.calc === "+") ? (state.total + action.price) : (state.total - action.price)
            }
        case "RESET":
            return {
                total: initialStateTotal.total
            }
        default:
            return state
    }
}