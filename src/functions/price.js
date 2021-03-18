export default function essaie(stateName, statePrice, actionPrice, calc) {
    if(stateName === undefined) {
        if(calc === "+") {
            return statePrice + actionPrice
        }
        else if(calc === "-") {
            return statePrice - actionPrice
        }
    } else {
        if(calc === "+") {
            return statePrice + actionPrice
        }
        else if(calc === "-") {
            return statePrice - actionPrice
        }
    }
}