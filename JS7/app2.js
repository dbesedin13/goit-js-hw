// TASK 2

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridientsLi = document.querySelector('#ingredients');
console.log(ingridientsLi);
for (let i = 0; i < ingredients.length; i++) {
  const ing = document.createElement('li');
  ing.innerHTML = ingredients[i];
  ingridientsLi.appendChild(ing);
}
// ingridientsLi.textContent = ingredients[0];
// console.log(ingridientsLi);

// const document.appendChild(ingridientsLi, ingredients);
