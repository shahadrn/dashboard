document.addEventListener("DOMContentLoaded", () => {
  const http = new XMLHttpRequest();
  http.open("GET", "./json/product.json");
  http.onload = () => {
    if (http.readyState === 4 && http.status === 200) {
      
      let Prod = JSON.parse(http.responseText);

      Prod.forEach(prod => {
        renderHtml(prod);
      });
    }
  };
  http.send();
});

let containerCards = document.getElementById('cardProduct');
function renderHtml(prod) {

  let info = document.createElement('info');

  info.innerHTML = `
    <div class="container my-3">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <img src=${prod.image} class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-5">
                        <div class="card-body">
                            <h5 class="card-title">${prod.name}</h5>
                            <p class="card-text">${prod.description}</p>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <p class="fs-4 font-weight-bolder">${prod.price}SAR</p>
                        <p class="text-success">${prod.status}</p>
                        <div class="row">
                            <div class="col">
                                <a href="#" class="btn btnDetails text-light bg-danger w-100">Details</a>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <a href="#" class="btn text-light bg-danger w-100">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
  containerCards.appendChild(info);
}