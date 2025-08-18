async function getProduct() {
  try {
    const response = await fetch("https://dummyjson.com/products/1");
    const data = await response.json();
    const productName = data.title;
    document.getElementById("product-name-async").textContent = productName;
    console.log("Product Name Async/Await:", productName);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

getProduct();