// import {getJson} from './database.js';
import {loadShopPage} from './shop.js';
import {loadCartPage} from './cart.js';


//console.log("Hello!!");
//import { getJson } from './database.js';
// const database = require("./database.js");


//console.log(await getJson("./data.json"));

loadShopPage();

document.querySelector("#shop").addEventListener("click", loadShopPage);
document.querySelector("#cart").addEventListener("click", loadCartPage);
//document.getElementsByClassName("btn-buy").addEventListener("click", addItemToCart);





//console.log(getJson("../data.json"));

