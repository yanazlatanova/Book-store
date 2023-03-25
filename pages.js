import {getJSON} from './database.js';
import {getBookCardHTML} from './modules.js';

let booksData = [];

// Load the books cards
async function loadContent() {

    // Get books data 
    booksData = await getJSON('./data.json');
    
    let contentHtml = "";
    booksData.map((book) => {
        contentHtml += getBookCardHTML(book);
    })

    // Add html content to the shop page structure
    document.querySelector("#books").innerHTML = contentHtml;
}

// Loads the Shop page structure
function loadShopPage() {
    document.querySelector("main").innerHTML = `
    <div class="container rounded m2-auto ">
      <div id="books" class="row text-center mt-2 g-3 flex-row justify-content-center">
      </div>
    </div>`;

    loadContent()
}

export { loadShopPage };