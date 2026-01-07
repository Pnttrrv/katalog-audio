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
        card.style.backgroundImage = `url(${item.image})`;
        card.style.backgroundPosition = "center";
        card.style.backgroundSize = "cover";
        card.style.backgroundRepeat = "no-repeat";
        card.style.minHeight = "100vh";
        card.innerHTML = `
        <h1>${item.title}</h1>
        <p>${item.description}</p>
        <p>${item.detail_description}</p>
        <p>${item.price}</p>
        `; // <== emberikan isi pada div dengan class product

        productList.appendChild(card); // <== mengirim isian yang ditambahkan dengan innerHTML ke index.html
      });
    });

  console.log("Test data dari script");
}

getData();
