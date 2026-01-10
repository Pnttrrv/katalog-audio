function getData() {
  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((items) => {
      // <==memecah data yang ada di data.json
      items.forEach((item) => {
        // <== mengulang memecah data items yang banyak menjadi item masing-masing
        const card = document.createElement("div"); //membuat element div
        const productList = document.getElementById("productList");
        card.className = "product"; // <== memberikan class pada div
        card.style.backgroundImage = `url(${item.image})`; //<== menambahkan background image
        console.log(item);
        card.innerHTML = `
        <div class="product-details">
          <h1>${item.title}</h1>
          <p>${item.subtitle}</p>
          <div class="product-detail-container">
            <div class="product-detail">
              <span class="label">Color</span>
              <span class="value">${item.color}</span>
            </div>
            <div class="product-detail">
              <span class="label">Battery</span>
              <span class="value">${item.battery}</span>
            </div>
            <div class="product-detail">
              <span class="label">Weight</span>
              <span class="value">${item.weight}</span>
            </div>
            <div class="product-detail">
              <span class="label">Latency</span>
              <span class="value">${item.latency}</span>
            </div>
          </div>
          <h3 class="product-price">${item.price}</h3>
          
        </div>
        `; // <== memberikan isi pada div dengan class product

        productList.appendChild(card); // <== mengirim isian yang ditambahkan dengan innerHTML ke index.html
      });
    });

  console.log("Test data dari script");
}

getData();
