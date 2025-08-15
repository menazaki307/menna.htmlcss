async function basicFetch() {
  const output = document.getElementById("basicOutput");
  output.innerHTML = "Loading..."; // Display loading message in English
  try {
    console.log(
      "Hello from our first try-catch block in the Fetch API Session"
    );
    // Fetch data from the dummyjson.com products API
    const response = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );

    // Log the full response and specific parts to the console for debugging
    console.log(response);
    console.log(response.products); // Accessing the 'products' array
    console.log(response.products[0]);
    console.log(response.products[0].title); // Accessing 'title' for products

    // Update the HTML output with the fetched product data
    output.innerHTML = `<div class="success">Request Successful!</div> <!-- Success message in English -->
    <h3>Product Data: </h3> <!-- Updated title for products in English -->
    <pre>Name: ${JSON.stringify(response.products[0].title)}</pre> <!-- Display product title -->
    <pre>Description: ${JSON.stringify(response.products[0].description)}</pre> <!-- Display product description -->
    <pre>Price: ${JSON.stringify(response.products[0].price)}</pre> <!-- Display product price -->
    <pre>Brand: ${JSON.stringify(response.products[0].brand)}</pre> <!-- Display product brand -->
    <hr>
    <pre>Name: ${JSON.stringify(response.products[1].title)}</pre>
    <pre>Description: ${JSON.stringify(response.products[1].description)}</pre>
    <pre>Price: ${JSON.stringify(response.products[1].price)}</pre>
    <pre>Brand: ${JSON.stringify(response.products[1].brand)}</pre>
    `;
  } catch (err) {
    // Log the error to the console for debugging
    console.log(err);
    // Display a more specific error message to the user
    output.innerHTML = `<div class="error">Failed to fetch or parse data: ${err.message}. Please check the API URL and JavaScript data structure.</div>`; // More detailed error in English
  }
}
