export function order(name, count, priceProduct, price, index, calc, deleteProduct) {

    if(deleteProduct === "none") {
        return {
            pannier : {
                type: name.toUpperCase().replace(/ /g, ''),
                price: priceProduct,
                name: name,
                counter: count,
                calc: calc,
                keyProduct: index
            },
            total :{
                type: "TOTAL",
                price: priceProduct,
                calc: calc,
            }
    
        }
    }
    else if(deleteProduct === "delete") {
        return {
            pannier: {
                type: name.toUpperCase().replace(/ /g, ''),
                deleteProduct : "delete"
            },
            total: {
                type: "TOTAL",
                price: price,
                calc: calc,
            }
        }
    }
}