import {getJson} from './database.js';
import {loadShop} from './pages.js';


//console.log("Hello!!");
//import { getJson } from './database.js';
// const database = require("./database.js");


console.log(await getJson("./data.json"));

document.querySelector("#shop").addEventListener("click", loadShop);





//console.log(getJson("../data.json"));

