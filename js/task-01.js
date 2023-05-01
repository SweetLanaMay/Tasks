const totalCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${totalCategories.length}`);
totalCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElement = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElement}`);
});
