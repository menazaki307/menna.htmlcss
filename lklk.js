new Promise(resolve => resolve(5))
  .then(result => {
    console.log("Result after multiplying by 2:", result * 2);
    return result * 2;
  })
  .then(result => {
    console.log("Result after subtracting from 3:", result - 3);
    return result - 3;
  })
  .then(finalResult => {
    console.log("result :", finalResult);
    document.getElementById("final-result").textContent = `result : ${finalResult}`;
  })
  .catch(error => {
    console.error("An error occurred :", error);
  });