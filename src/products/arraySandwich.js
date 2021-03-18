import bigmouc from '../images/bigmouc.png'
import cheese from '../images/cheese.png';
import doublecheese from '../images/doublecheese.png';
import triplecheese from '../images/triplecheese.png';
import moucchicken from '../images/moucchicken.png';
import cocacola from '../images/cocacola.png'
import fanta from '../images/fanta.png';
import icethea from '../images/icethea.png';
import evian from '../images/evian.png';
import mouccookie from '../images/mouccookie.png';
import sunday from '../images/sunday.png';
import moucfleury from '../images/moucfleury.png';

export const arraySandwich = {
    burgers : [
        {
            name: "CheeseBurger",
            price: 2.50,
            img: cheese
        },
        {
            name: "Double CheeseBurger",
            price: 3.40,
            img: doublecheese
        },
        {
            name: "Triple CheeseBurger",
            price: 4.20,
            img: triplecheese
        },
        {
            name: "BigMouc",
            price: 5.80,
            img: bigmouc
        },
        {
            name: "MoucChicken",
            price: 5.50,
            img: moucchicken
        }
    ],
    drinks : [
        {
            name: "CocaCola",
            price: 3.20,
            img: cocacola
        },
        {
            name: "Icethea",
            price: 3.20,
            img: icethea
        },
        {
            name: "Fanta",
            price: 3.20,
            img: fanta
        },
        {
            name: "Evian",
            price: 2.50,
            img: evian
        }
    ],
    desserts : [
        {
            name: "MoucFleury",
            price: 3.80,
            img: moucfleury
        },
        {
            name: "Sunday",
            price: 3.50,
            img: sunday
        },
        {
            name: "MoucCookie",
            price: 2.00,
            img: mouccookie
        }
    ]
}