const getBookCardHTML = (book) => {
    return `
    <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
     
    <div class="card card-img-top h-100">
        <img src="${book.image}" />
        <div class="card-body">
            <h5 class="card-title"> ${book.title} </h5>
            <h6 class="card-author"> ${book.author} </h6>
            <h5 class="card-price"> ${book.price} SEK </h5>
        </div>
        <div class="card-body">
            <a href="#" id="purchase" class="card-link btn btn-primary btn-buy" book-id ="${book.id}">ADD TO CART</a>
            <a href="#" id="popDetail" class="card-link btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modal-${book.id}">VIEW</a>            
        </div>
    </div>
    </div>

    <div class="modal fade" id="modal-${book.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"> ${book.title} </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card h-100">
                    <div class="card-body">
                        <div class="col-md-5 text-center">
                            <img src="${book.image}" alt="" class="float-left rounded d-none d-md-block img-thumbnail">
                        </div>
                        <h5 class="card-primary"> ${book.title} </h5>
                        <p class="card-secondary"> Author: ${book.author} <br/> Category: ${book.category}</p>                        
                        <h5 class="card-secondary"> Price: ${book.price} kr </h5>
                        <p class="card-secondary description-content"> ${book.description} </p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-buy" book-id ="${book.id}">ADD TO CART</button>
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    `;
}

export { getBookCardHTML }