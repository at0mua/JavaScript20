const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

const getCategoryQuantity = allCategories => {
  const categoryQuantity = allCategories.forEach(category =>
    console.log(
      `Категория: ${category.children[0].textContent}; Количество элементов: ${category.children[1].childElementCount}.`,
    ),
  );
  return categoryQuantity;
};

getCategoryQuantity(categories);
