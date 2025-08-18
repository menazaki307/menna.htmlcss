function runExamples() {
  console.clear();
  console.log("1. let & const");
  let cart = ["Meat", "Milk"];
  console.log("Cart:", cart);
  cart = [...cart, "Discount10"]; 
  console.log("Updated Cart with Discount:", cart);

  try {
    const fixedCart = ["jacket", "Watch"];
    fixedCart.push("Hat");
    console.log("Const Cart after push:", fixedCart);

  } catch (err) {
    console.log("Error with const reassignment:", err.message);
  }

  console.log("\n2. Arrow Functions");
  const calculateTax = (price) => price * 0.15 + price;
  console.log("100 with tax:", calculateTax(100));
  console.log("250 with tax:", calculateTax(250));
  console.log("500 with tax:", calculateTax(500));

  console.log("\n3. Template Literals");
  function studentResult(name, grade) {
    console.log(`Student ${name} has scored ${grade}% in the final exam.`);
  }
  studentResult("Menna", 95);

  console.log("\n4. Default Parameters");
  function applyDiscount(price, discount = 0.1) {
    return price - price * discount;
  }
  console.log("Price with default discount:", applyDiscount(100));
  console.log("Price with 20% discount:", applyDiscount(100, 0.2));

  console.log("\n5. Destructuring");
  const book = { title: "Book", author: "John Doe", price: 200 };
  const { title, price } = book;
  console.log(`The book "${title}" costs $${price}.`);

  console.log("\n6. Spread Operator");
  const arr1 = ["Math", "English"];
  const arr2 = ["Science", "History"];
  const subjects = [...arr1, ...arr2, "PE"];
  console.log("Subjects:", subjects);

  console.log("\n7. Rest Parameters");
  function maxNumber(...nums) {
    return Math.max(...nums);
  }
  console.log("Max number:", maxNumber(5, 10, 3, 20, 15));

  console.log("\n8. Enhanced Object Literals");
  const student = {
    name: "Ali",
    grade: "A",
    introduce() {
      console.log(`Hi, I'm ${this.name} and my grade is ${this.grade}`);
    },
  };
  student.introduce();

  console.log("\n9. Classes");
  class BankAccount {
    constructor(balance = 0) {
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount}. Balance: ${this.balance}`);
    }
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Insufficient funds!");
      } else {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. Balance: ${this.balance}`);
      }
    }
  }
  const account = new BankAccount(100);
  account.deposit(50);
  account.withdraw(30);
  account.withdraw(200);

  // 10. Promises
  console.log("\n10. Promises");
  function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "Ali" });
      }, 1500);
    });
  }
  fetchUser().then((user) => console.log(`User found: ${user.name}`));
}
