const url1 = "https://dummyjson.com/products/1";
const url2 = "https://dummyjson.com/products/2";

// Create an array of promises
const promise1 = fetch(url1).then(response => response.json());
const promise2 = fetch(url2).then(response => response.json());

// Use Promise.all() to wait for all promises to resolve
Promise.all([promise1, promise2])
  .then(data => {
    // 'data' is an array containing the results of each promise
    const product1Name = data[0].title;
    const product2Name = data[1].title;

    console.log("First product name :", product1Name);
    console.log("Second product name :", product2Name);

    // Display names on the page
    const productList = document.getElementById("product-list");
    const item1 = document.createElement("li");
    item1.textContent = `First product : ${product1Name}`;
    const item2 = document.createElement("li");
    item2.textContent = `The second product : ${product2Name}`;

    productList.appendChild(item1);
    productList.appendChild(item2);
  })
  .catch(error => {
    console.error("An error occurred :", error);
  });