import {getJSON} from './database.js';
import {getBookCardHTML} from './modules.js';
import {addItemToCart} from './cart.js';

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
    
    
    
    //console.log(document.getElementsByClassName("btn-buy"));
    // console.log(document.querySelectorAll("#purchase"));



    // Add EventListener the ADD TO CART buttons
    document.querySelectorAll('.btn-buy').forEach(button => {
    button.addEventListener('click', () => {

        // TO DO
            //const bookId = button.dataset.book;
            //addToCart(booksArr.find(book => String(book["id"]) === bookId));
            console.log("Hello");
        });
    });
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