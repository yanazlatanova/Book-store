import { getShoppingCartItem } from './modules.js';

let cart = [];

// Adds a book or increases its quantity
function addItemToCart(book) {

    // Get the item form the cart
    let item = cart.find(cartItem => cartItem.id === book.id);

    if (typeof item === 'undefined') {
        // Add it if it is not in the cart already
        item = { id: book.id, title: book.title, price: book.price, quantity: 1, image: book.image };
        cart.push(item)
    } else {
        // Or increase the quantity
        item.quantity += 1;
    }

    // console.log(item);
    // console.log(cart);
}

function calcOrderPrice() {

    let totalPrice = 0;
    
    if (cart.length != 0) {
        cart.map((book) => {
            totalPrice = totalPrice + book.price * book.quantity;
        })
    }
    return totalPrice;
}

async function loadContent() {

    let contentHtml = "";
    
    if (cart.length != 0) {
        cart.map((book) => {
            contentHtml += getShoppingCartItem(book);
        })
            
    } else {
        document.querySelector("#cart-empty").innerHTML = "No items added";        
    }

    // Add html content to the shop page structure
    document.querySelector("#cart-content").innerHTML = contentHtml;

    // Calculate end price
    let totalPrice = calcOrderPrice()

    // Update end price
    document.querySelector("#total-price").innerHTML = totalPrice;

    // Delete orderbutton
    document.querySelector('.btn-deleteOrder').addEventListener('click', () => {
        cart = [];
        loadContent();
    });

}


// Loads the cart page structure
function loadCartPage() {
    document.querySelector("main").innerHTML = `
    <div id="cart-container" class="container rounded mx-auto mt-5  mb-5" style="background-color: #EBEBEB";>
        <h1> Shopping Cart </h1>
        <div id="cart-row" class="row text-center g-3  mt-5 flex-row justify-content-center" >
            <table class="table table-bordered align-middle text-center">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody id="cart-content">
                    
                    
                </tbody>
            </table>
        </div>

        <p class="text-center" id="cart-empty"></p>   

        
        <p class="h1">Total Price: <span id="total-price">0</span> SEK</p>

        <div id="cart-container" class="container rounded mt-5 ">
            <button type="button" class="btn btn-primary btn-lg btn-block"  data-toggle="modal" data-target="#paymentPopUp">PAY</button>
            <button type="button" class="btn btn-outline-secondary btn-lg btn-block btn-deleteOrder">Delete order</button>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="paymentPopUp" tabindex="-1" role="dialog" aria-labelledby="paymentPopUp" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Payment</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        This functionality will be added in the near future! :D
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>`;

    loadContent()
}

export { addItemToCart, loadCartPage };