const Card = [
    {
        "orders" : "Sales",
        "price" : "3450.99 SAR"
    },
    {
        "orders" : "Orders",
        "price" : "1890 SAR"
    },
    {
        "orders" : "Visitors",
        "price" : "352 SAR"
    },
    {
        "orders" : "Conversion Rate",
        "price" : "3.75%"
    }
];

let containerCards = document.getElementById('colCard');

Card.forEach(card => {
    let info = `
    <div class="col-xl-3 col-md-6">
        <div class="card bg-pink mb-3 text-center">
            <div class="card-body text-light">
                <h5>${card.orders}</h5>
                <p>${card.price}</p>
            </div>
        <div class="card-footer text-left"><button type="button" class="btn btn-link text-light">View Details</button>
        </div>
        </div>
    </div>`;

    containerCards.innerHTML +=info;
});

