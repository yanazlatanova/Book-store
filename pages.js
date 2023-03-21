
function getShopContent() {
    return `<div class="well well-large"> Hey! You are in the Shop </div>`    
}


function loadShop() {
    document.querySelector("main").innerHTML = getShopContent();
    //console.log("Yanannana");
}

export {loadShop};