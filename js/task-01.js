// const categoriesList = document.querySelectorAll("#categories .item");
// const numberCat = categoriesList.length;
// console.log(`Number of categories: ${numberCat}`);

// categoriesList.forEach((category) => {
//   const categoryName = category.querySelector("h2").textContent;
//   const categoryNameLi = category.querySelector("li").textContent;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryNameLi}`);
// });

const h2 = document.querySelectorAll("#categories h2");
const li = document.querySelectorAll("#categories li");
h2.forEach((h2) => {
  console.log("h2:", h2.textContent);
});
li.forEach((li) => {
  console.log("li:", li.textContent);
});
