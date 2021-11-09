document.addEventListener("DOMContentLoaded", () => {
    const http = new XMLHttpRequest();
    http.open("GET", "./json/cardsInfo.json");
    http.onload = () => {
        if(http.readyState === 4 && http.status === 200) {
            let Card = JSON.parse(http.responseText);

            Card.forEach(card => {
                renderHtml(card);
            });
        }
    };
    http.send();
});

let containerCards = document.getElementById('colCard');
function renderHtml(card) {  

    let info = `
        <div class="col-md-3 my-2">
            <div class="card bg-danger bg-gradient m-15 text-center" style="max-width: 18rem;">
                <div class="card-body text-light">
                    <h5>${card.orders}</h5>
                    <p>${card.price}</p>
                </div>
            <div class="card-footer text-left"><button type="button" class="btn btn-link text-light">View Details</button>
            </div>
            </div>
        </div>`;
        containerCards.innerHTML +=info;
}