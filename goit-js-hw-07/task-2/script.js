const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const getNewList = (list, arrItems) => {
  const createElem = item => {
    const listElem = document.createElement('li');
    listElem.textContent = item;
    return listElem;
  };
  const arrElemList = arrItems.map(item => createElem(item));
  return list.append(...arrElemList);
};

getNewList(ingredientsListRef, ingredients);
