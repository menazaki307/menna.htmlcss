const errorPromise = new Promise((resolve, reject) => {
  const success = false; 
  if (success) {
    resolve("success");
  } else {
    reject("Something went wrong!"); 
  }
});

errorPromise
  .then(message => {
    console.log("the message :", message);
    document.getElementById("error-message").textContent = `الرسالة: ${message}`;
  })
  .catch(error => {
    console.error("An error occurred.catch():", error);
    document.getElementById("error-message").textContent = ` An error occurred: ${error}`;
  });