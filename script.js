function getData() {
  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((hasil) => console.log(hasil));

  console.log("Test data dari script");
}

getData();
