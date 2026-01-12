function getDetail() {
  const detail = document.getElementById("detailProduct");
  const param = new URLSearchParams(location.search);
  const productId = param.get("id");

  if (!productId) {
    detailProduct.textContent = "ID tidak ditemukan!";
    return;
  }

  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((hasil) => {
      console.log(productId);
      const item = hasil.find((para) => para.id === productId); //untuk filter hasil yang isinya ada 12 disesuaikan dengan productId
      if (!item) {
        detailProduct.textContent = "Produk Tidak Ditemukan";
        return;
      }
      console.log(item);
      detailProduct.innerHTML = `
      <div class="detail-card">
        
        <div class="detail-body" style="background-image: url(${item.image})">
          <a href="index.html" class="btnBack">&#8592; Kembali</a>
          <h1>${item.title}</h1>
          <p>${item.subtitle}</p>
          <div id="detailBody">
          
          </div>

          <div class="detailStat">
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

        </div>
      </div>
      `;

      const detailBody = document.getElementById("detailBody");
      const paragraphs = (item.detail_description || "").split(/\n+/);
      paragraphs.forEach((text) => {
        const trimmed = text.trim();
        console.log(trimmed);
        const p = document.createElement("p");
        p.textContent = trimmed;
        detailBody.appendChild(p);
      });
    });
}

getDetail();
