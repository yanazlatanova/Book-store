const getBookCardHTML = (book) => {
  return `
    <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
     
    <div class="card card-img-top h-100">
        <img src="${book.image}" />
        <div class="card-body">
            <h5 class="card-title"> Title: ${book.title} </h5>
            <h6 class="card-author"> Author: ${book.author} </h6>
            <h6 class="card-price"> Price: ${book.price} kr </h6>
            <h6 class="card-category"> Category: ${book.category} </h6>
        </div>
        <div class="card-body">
            <a href="#" id="popDetail" class="card-link" data-bs-toggle="modal" data-bs-target="#popModal">Details</a>
            <a href="#" id="purchase" class="card-link">Purchase</a>
        </div>
    </div>
    </div>

    <div class="modal fade" id="popModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Book title: ${book.title} </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card h-100">
                    <div class="card-body">
                        <h6 class="card-secondary"> Author: ${book.author} </h6>
                        <h6 class="card-secondary"> Price: ${book.price} kr </h6>
                        <h6 class="card-secondary"> Category: ${book.category} </h6>
                        <h6 class="card-secondary"> Description: ${book.category} </h6>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Purchase</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    `;
}

export { getBookCardHTML }