// TASK 1

const el = document.querySelectorAll('.item');
// // let elementLi = [...el].querySelectorAll('li').length;
// console.log(`в списке ${el.length} категорий`);

Array.from(el).forEach(li => {
  const h2 = li.querySelector('h2');
  const elementLi = li.querySelectorAll('li');
  console.log(
    `Категория ${h2.textContent}. Количество элементов: ${elementLi.length}`,
  );
});
