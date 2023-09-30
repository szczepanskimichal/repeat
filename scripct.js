// "use strict";
// 1. Deklaracja funkcji multiply
// function multiply(x, y, z) {
//   console.log("Kod przed return jest wykonywany jak zwykle");
//   // Ciało funkcji
//   //   console.log(`Wynikiem mnożenia jest ${x * y * z}`);
//   return x * y * z;
//   console.log("Ten log nigdy nie zostanie wywołany, jest po return");
// }

// 2. Wywołania funkcji multiply
// multiply(2, 3, 5); // 'To jest log podczas wywoływania funkcji multiply'
// multiply(); // 'To jest log podczas wywoływania funkcji multiply'
// multiply(2, 2, 2); // 'To jest log podczas wywoływania funkcji multiply'
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Wprowadź kwotę większą od zera");
//   } else if (amount > balance) {
//     console.log("Za mało środków na koncie");
//   } else {
//     console.log("Operacja wypłaty powiodła się");
//   }
// }

// withdraw(0, 300); // "Wprowadź kwotę większą od zera"
// withdraw(500, 300); // "Za mało środków na koncie"
// withdraw(100, 300); // "Operacja wypłaty powiodła się"
//Deklaracja i odczyt tablic
// const arr = [1, 2, 3];
// const arr2 = ["a", "b"];
// const arr3 = [1, "a", null];
// const arr4 = [1, 2, [7, 8, 9], [4, 5, 6]];
// console.log(arr[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr4[0]);
// console.log(arr[0]);

// const arrw5 = new Array("1", "2");
// console.log(arrw5);
//przemieszczanie po tablicach

// const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]}, index: ${i}`);
// }
// console.log("-----");
// for (const el of arr) {
//   console.log(el);
// }
// console.log("-----");
// const str = "hello world";
// for (const char of str) {
//   console.log(char);
// }
// const users = ["ada", "michal", "marysia"];

// for (const user of users) {
//   console.log(users);
// }

//metody tablicowe

// const arr = ["a", "b", "c"];
// //split & join
// // console.log(arr.join());
// // console.log(arr.join("-"));
// // console.log(arr.join(" - "));

// const str = arr.join(" - ");
// // console.log(str.split(","));
// // console.log(str.split(" - "));

// const stringOfNumbers = "1,2,3,4,5,6";
// const arrayOfNumbers = stringOfNumbers.split(",");
// for (let i = 0; i < arrayOfNumbers.length; i++) {
//   arrayOfNumbers[i] = parseInt(arrayOfNumbers[i]) * 20;
// }
// console.log(arrayOfNumbers);
// console.log(stringOfNumbers.split(",").join("-"));

//idexOf

// const arr = ["a", "b", "c", "d"];
// console.log(arr.indexOf("c"));
// console.log(arr.indexOf("a"));
// const firstNElements = arr.slice(1, 3);
// console.log(firstNElements);
// console.log(arr);
// const last2Elements = arr.slice(-2);
// console.log(last2Elements);
// const arrCopy = arr.slice();
// console.log(arrCopy);
//splice
// arr.splice(1, 2);
// console.log(arr);
// arr.splice(0, 1, "replace");
// console.log(arr);

//function

// function fnA() {
//   console.log("1");
//   fnB();
//   console.log("2");
// }
// function fnB() {
//   console.log("3");
// }
// console.log("4");
// fnA();
// console.log("5");

// function concat() {
//   const concatArr = [];
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//     for (let a = 0; a < arguments[i].length; a++) {
//       concatArr.push(arguments[i][a]);
//     }
//   }
//   return concatArr;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// console.log(concat(arr1, arr2));

//objects
// const key = "pageCount";
// const bookObj = {
//   title: "the hobbit",
//   "is for kids": true,
//   [` ${key}`]: 500,
//   author: {
//     firstname: "jrr",
//     secondname: "tolkien",
//   },
//   genres: ["fantasy", "kid"],
// };
// const title = bookObj.title;
// console.log(title);
// console.log(bookObj.title);
// console.log(bookObj["is for kids"]);
// console.log(bookObj[key]);
// //deliting props
// // delete bookObj[author];
// console.log(bookObj);

//reference
// function foo(param) {
//   para.a = 12;
// }
// const arg = {
//   a: 10,
// };
// console.log(arg);
// foo(arg);
// console.log(arg);

//computed properties

// function objectifyBook(propName, propValue) {
//   return {
//     [propName]: propValue,
//   };
// }
// const obj1 = objectifyBook("nazwa propsa", 500);
// console.log(obj1);

//metods

// function createBook(title, author) {
//   return {
//     title,
//     author,
//     setTitle(title) {
//       this.title = title;
//     },
//   };
// }
// const book = createBook("wiedzmin", "andrzej sapkowski");
// const book2 = createBook("50 shadows of grey", "aaa");
// // const book = {
// //   title: "wiedmin",
// //   author: "Andrzej sapkowski",
// //   //metoda
// //   setTitle(title) {
// //     book.title = title;
// //   },
// // };
// console.log(book);
// book.setTitle("krew elfow");
// book2.setTitle = "50 shadows of grey";
// console.log(book2);

//iteracje po obiekcie
// const obj = {
//   "testowy klucz": "hello world",
//   title: "w kregu zajebistosci",
//   // cos: "hello world2",
// };

// for (key in obj) {
//   // console.log(key);
//   console.log(obj[key]);
// }
// const book = {
//   title: "The last kingdom",
//   author: "jakis tam",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//   console.log(book[key]);
// }

// for (const key of Object.keys(book)) {
//   console.log(key);
// }
// console.log(book);
// console.log(book.key);

//object values
// const book = {
//   title: "The last kingdom",
//   author: "jakis tam",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const bookValues = Object.values(book);
// for (const value of bookValues) {
//   console.log(value);
// }
// const bookEntries = Object.entries(book);
// for (const entry of bookEntries) {
//   console.log(entry);
// }

//spread

// const temps = [1, 2, 3, 4];
// const jakies = [5, 6, 7, 8];
// const concat = [...temps, ...jakies];
// console.log(concat);

// console.log(Math.min(...temps));

// destrukturyzacja obiektow

// const user = {
//   name: "adriana marysia",
//   tag: "howToSpekInEnglish",
//   stats: {
//     followers: 5555,
//     views: 10000,
//     likes: 2000,
//   },
//   tags: ["celebrity", "sailing", "cats"],
// };
// const {
//   name,
//   tag,
//   stats,
//   stats: { followers, views: userViews = 200 },
//   tags: [firstTag, secondTag],
// } = user;
// console.log(name, tag, followers, stats, firstTag, secondTag);

//destrukturyzacja obiektu w petli for of

// const books = [
//   {
//     title: "Ogniem i Mieczem",
//     author: "Henryk Sienkiewicz",
//     rating: 8.38,
//   },
//   {
//     title: "Killing Moon",
//     author: "Jo Nesbø",
//     rating: 8.51,
//   },
// ];
//3 mozliwosci destrukturyzacji

// for (book of books) {
//   console.log(
//     `A book written by ${book.author}, and titled ${book.title} with a score of:${book.rating}`
//   );
// }

// for (book of books) {
//   const { title, author, rating } = book;
//   console.log(
//     `A book written by ${author}, and titled ${title} with a score of:${rating}`
//   );
// }

// for ({ title, author, rating } of books) {
//   console.log(
//     `A book written by ${author}, and titled ${title} with a score of:${rating}`
//   );
// }

// destrukturyzacja obiektu w funkcji

// function returnPriceLabel(
//   price,
//   suffix = "",
//   prefix = "",
//   inLowerCase = false,
//   addDate = false
// ) {
//   let str = `${prefix}${price}${suffix}`;
//   if (inLowerCase) {
//     str = str.toLocaleLowerCase();
//   }
//   if (addDate) {
//     str = `${str} - ${new Date()};`;
//   }
//   console.log(str);
// }

// returnPriceLabel(30.5, "", "PLN", false, true);

// object param ---- wrzorzec obiektu

// function returnPriceLabel({
//   price,
//   suffix = "",
//   prefix = "",
//   inLowerCase = false,
//   addDate = false,
// }) {
//   let str = `${prefix}${price}${suffix}`;
//   if (inLowerCase) {
//     str = str.toLocaleLowerCase();
//   }
//   if (addDate) {
//     str = `${str} - ${new Date()};`;
//   }
//   console.log(str);
// }

// returnPriceLabel({ price: 50.3, sufix: "pln", addDate: true });

//callBAck 1

// function addition(...numbers) {
//   let sum = 0;
//   for (const numer of numbers) {
//     sum += parseInt(numer);
//   }
//   return sum;
// }

// function multiplication(...numbers) {
//   let product = 1;
//   for (const numer of numbers) {
//     product += parseInt(numer);
//   }
//   return product;
// }

// function doMAth(operation, ...arguments) {
//   console.log(`Result of the operation is: ${operation(...arguments)}`);
// }
// doMAth(function () {}, 1, 2, 3);
// doMAth(addition, 1, 2, 3, "15");
// doMAth(multiplication, 1, 2, 3, "15");

//callback2

// for (let i = 0; i < 7; i += 1) {
//   console.log(Math.random());
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(Math.random());
// }

// for (let i = 0; i < 3; i += 1) {
//   console.log(`hello ${i}`);
// }

// function repeat(m, cb) {
//   for (let i = 0; i < m; i += 1) {
//     cb(i);
//   }
// }
// repeat(3, function () {
//   console.log(Math.random());
// });
// repeat(7, function () {
//   console.log("michal jest madry");
// });

// function hello(i) {
//   console.log(`hello ${i}`);
// }
// repeat(2, hello);

// arrow function application 3
// function safeDivide(a, b) {
//   if (b === 0) {
//     return 0;
//   }
//   return a / b;
// }
// const safeDivide = (a, b) => {
//   return b === 0 ? 0 : a / b;
// };

//Metody tablicowe
//map

// const arr = [1, 2, 3, 4];
// // const multiply = arr.map((el, index, array) => el * 3);
// const multiply = arr.map((el) => el * 3);
// console.log(multiply);
// console.log(arr);

//filter
// const values = [1, 2, 3, 4, 5, 6, 7];
// const filtered = values.filter((el, idex, array) => el > 0);
// console.log(filtered);
// console.log(values);

// const students = [
//   { name: "Mango", courses: ["matematyka", "fizyka"] },
//   { name: "Poly", courses: ["informatyka", "matematyka"] },
//   { name: "Kiwi", courses: ["fizyka", "biologia"] },
// ];
// const allCourses = students.flatMap(({ courses }) => courses);
// console.log(allCourses);
// const uniqueCourses = allCourses.filter((course, index, array) =>
//   array.indexOf(course === index)
// );
// console.log(uniqueCourses);

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];
// const best = students.filter(({ score }) => score >= HIGH_SCORE);
// console.log(HIGH_SCORE);
// const worst = students.filter(({ score }) => score <= LOW_SCORE);
// console.log(worst);
// students[0].score = 100;
// console.log(best);

//find

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];
// const firstGreen = colorPickerOptions.find((color) => color.label === "green");
// console.log(firstGreen);
// const allGreen = colorPickerOptions.filter((color) => color.label === "green");
// console.log(allGreen);

// reduce

// Array.reduce((
//     acc, element, index, array
// )=> {
//     return acc;
// }, initialValue
// )
// const total = [2, 7, 3, 14].reduce((acc, number) => {
//   return acc + number;
// });
// console.log(total);
// const totalWithInitial = [2, 7, 3, 14].reduce((acc, number) => {
//   return acc + number;
// }, 0);
// console.log(totalWithInitial);
// // sort

// const score = [1, 4, 7, 9, 546];
// score.sort();
// console.log(score);
// dd

// ZAMÓWIENIE PRODUKTU -- easy

// const pricePerDroid = 1000;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// ZAMÓWIENIE PRODUKTU -- 2

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//---------

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

//-------

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   const isMatch = password === "jqueryismyjam";
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

//-------

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//--------------------------
//ZADANIE: MAGAZYN TOWARÓW

// function checkStorage(available, ordered) {
//   let message;
//   if (available > ordered) {
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// ZADANIE: SPRAWDZENIE BALANSU --- FAjne

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = orderedQuantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     customerCredits -= totalPrice; //zmienna customerCredits zostanie zmniejszona o wartość zmiennej totalPrice, a wynik zostanie przypisany z powrotem do zmiennej customerCredits.
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ZADANIE: MAGAZYN TOWARÓW 2.0

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//OBLICZANIE ZNIŻKI

// function getDiscount(totalSpend) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpend >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpend <= 50000 && totalSpend >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpend <= 20000 && totalSpend >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpend < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));

//SPRAWDZENIE HASŁA

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   return message;
// }
// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

//ZADANIE: DOSTAWA TOWARU

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Poland"));

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + "...";
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage("Curabitur ligula sapien", 10));
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

//MAGAZYN TOWARÓW 3.0

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = "";

//   words.forEach(function (word) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//------------------------------------------------------------------
// objects
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//ZADANIE. LICZENIE WŁAŚCIWOŚCI 2.0

// function countProps(object) {
//   const propCount = Object.keys(object).length;
//   return propCount;
// }
// console.log(countProps({ name: "Michal", age: 37 }));
// console.log(
//   countProps({
//     mail: "michalszczepanski07@gmail.com",
//     isOnline: true,
//     score: 500,
//   })
// );

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);
//ZADANIE: WYDATKI NA WYNAGRODZENIA
// function countTotalSalary(salaries) {
//   const salaryValues = Object.values(salaries);
//   let totalSalary = 0;
//   for (const salary of salaryValues) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//ZADANIE. POSZUKIWANIE OBIEKTU WEDŁUG WARTOŚCI WŁAŚCIWOŚCI

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return "there is no product on the list";
// }
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("patelnia"));

//ZADANIE: CAŁKOWITY KOSZT TOWARU
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("banan"));
//--------------------------------------------
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(colors);
// console.log(rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// //const highToday = forecast.today.high;
// //const lowToday = forecast.today.low;
// //const todayIcon = forecast.today.icon;

// //const highTomorrow = forecast.tomorrow.high;
// //const lowTomorrow = forecast.tomorrow.low;
// //const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.min(...scores);
// const worstScore = Math.max(...scores);
// console.log(worstScore);
// console.log(bestScore);

// const bookShelf = {
//   books: ["the last kingdom", "the gruardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     const index = this.books.indexOf(bookName);
//     if (index === -1) {
//       this.books.splice(index, 1);
//       return `Deliting book ${bookName}`;
//     } else {
//       return `Book ${bookName} not found`;
//     }
//   },
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (index === -1) {
//       this.books[index] = newName;
//       return `Updating book ${oldName} to ${newName}`;
//     } else {
//       return `Book ${oldName} not found`;
//     }
//   },
// };
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// const bookShelf = {
//   books: ["the last kingdom", "the gruardian of dreams"],
//   updateBOok(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (index !== -1) {
//       this.books.splice(index, 1, newName);
//     }
//   },
// };
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
//ZADANIE. SKLEP Z ELIKSIRAMI „U STAREJ ROPUCHY”
//ZADANIE. OTRZYMUJEMY WSZYSTKIE MIKSTURY

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.potions);
//ZADANIE: DODAJ NOWĄ MIKSTURĘ

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.potions);
// console.log(atTheOldToad.potions);

//ZADANIE: USUŃ MIKSTURĘ

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const index = this.potions.indexOf(potionName);
//     if (index !== -1) {
//       this.potions.splice(index, 1);
//     }
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);

//ZADANIE: ZAKTUALIZUJ MIKSTURĘ
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const index = this.potions.indexOf(oldName);
//     if (index !== -1) {
//       this.potions[index] = newName;
//     }
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad);

//ZADANIE: POWIĘKSZANIE INWENTARZA
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionNames = this.potions.map((potion) => potion.name);
//     if (potionNames.includes(newPotion.name)) {
//       return `Error!!! Potion ${newPotion.name} is already in your inventory.`;
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const potionIndex = this.potion.findIndex(
//       (potion) => potion.name === potionName
//     );
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory`;
//     }
//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionToUpdate = this.potions.find(
//       (potion) => potion.name === oldName
//     );
//     if (!potionToUpdate) {
//       return `Potion ${oldName} is not in inventory`;
//     }
//     potionToUpdate.name = newName;
//   },
// };
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.log(atTheOldToad);
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.potions);

//callback

// function deliveryPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callBAck) {
//   return callBAck(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliveryPizza));
//callback2

// function makePizza(pizzaName, callback) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   return `Delivering pizza ${pizzaName}.`;
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   return `Eating pizza ${pizzaName}`;
// });
// makePizza("Ultracheese");
// console.log(makePizza("Ultracheese"));

// function processCall(recipient) {
//   // Imitujemy dostępność abonenta poprzez losowy numer
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Abonent ${recipient} niedostępny, zostaw wiadomość.`);
//     // Logika aktywacji automatycznej sekretarki
//   } else {
//     console.log(`Łączymy z ${recipient}, proszę czekać...`);
//     // Logika przyjęcia połączenia
//   }
// }

// processCall("Mango");

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Imitujemy dostępność abonenta losowym numerem
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Łączymy z ${name}, proszę czekać...`);
//   // Logika przyjęcia połączenia
// }

// function activateAnsweringMachine(name) {
//   console.log(`Abonent ${name} niedostępny, zostaw wiadomość.`);
//   // Logika aktywacji automatycznej sekretarki
// }

// function leaveHoloMessage(name) {
//   console.log(`Abonent ${name} niedostępny, zapisujemy hologram.`);
//   // Logika zapisu hologramu
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSucces, onError) {
//     if (pizzaPalace.pizzas.includes(pizzaName)) {
//       onSucces(pizzaName);
//       return makePizza(pizzaName);
//     } else {
//       onError(pizzaName);
//       return onOrderError(
//         (error = `There is no pizza with a name ${pizzaName} in the assortment.`)
//       );
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
//----------------------------------------------
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([500, 300, 150, 50]));
//ZADANIE. FILTROWANIE TABLICY LICZB
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//ZADANIE. WSPÓLNE ELEMENTY
// function getCommonElements(firstArr, secondArr) {
//   const commonElements = [];
//   firstArr.forEach(function (element) {
//     if (secondArr.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//-------------------------------
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100));
//ZADANIE. FILTROWANIE TABLICY LICZB 2.0

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];
//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//ZADANIE. WSPÓLNE ELEMENTY 2.0

// // Deklaracja funkcji getCommonElements jako funkcji strzałkowej.
// const getCommonElements = (firstArray, secondArray) => {
//   // Inicjalizacja pustej tablicy commonElements, która będzie przechowywać wspólne elementy.
//   const commonElements = [];
//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//-----------------------------------
// function changeEven(numbers, value) {
//   const updateNumbers = [];
//   for (let i = 0; i > numbers.length; i += 1) {
//     if (number[i] % 2 === 0) {
//       updateNumbers.push(numbers[i] + value);
//     } else {
//       updateNumbers.push(numbers[i]);
//     }
//   }
//   return updateNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);
//-----------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const titles = books.map((book) => book.title);
// console.log(titles);
//------------------------------------
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// // Przykładowe dane testowe
// const users = [
//   { id: 1, name: "Moore Hensley", age: 23 },
//   { id: 2, name: "Sharlene Bush", age: 43 },
//   { id: 3, name: "Ross Vazquez", age: 25 },
//   { id: 4, name: "Elma Head", age: 31 },
//   { id: 5, name: "Carey Barr", age: 27 },
//   { id: 6, name: "Blackburn Dotson", age: 38 },
//   { id: 7, name: "Sheree Anthony", age: 32 },
// ];

// console.log(getUserNames(users));
//----------------------------------------------
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

// // Przykładowe dane testowe
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   //... itd. - pozostałe obiekty użytkowników
// ];

// console.log(getUserEmails(users));
//--------------------------------
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// const evenBumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(evenBumbers);
// console.log(oddNumbers);
//-----------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.allGenres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, self) => self.indexOf(genre) === index
// );
// console.log(uniqueGenres);
//--------------------------------------

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Tablica obiektów z imionami Mango i Kiwi

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Tablica z jednym obiektem Ajax

// // W funkcji callback wygodnie jest destrukturyzować właściwości obiektu
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Tablica obiektów z imionami Poly i Houston

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
