import {getJSON} from './database.js';
import {getBookCardHTML} from './modules.js';

let booksData = [];

// Create a load method
async function loadContent() {

    // Get books data 
    booksData = await getJSON('./data.json');
    
    let contentHtml = "";
    booksData.map((book) => {
        contentHtml += getBookCardHTML(book);
    })

    document.querySelector("#books").innerHTML = contentHtml;
}

function loadShopPage() {
    // console.log("in main");
    document.querySelector("main").innerHTML = `
    <div class="container rounded m2-auto ">
      <div id="books" class="row text-center mt-2 g-3 flex-row justify-content-center">
      </div>
    </div>`;

    loadContent()
}

export { loadShopPage };