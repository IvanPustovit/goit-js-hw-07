'use strict'
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const listArr = document.querySelectorAll('.item')
// console.log(listArr);
console.log(`В списке ${listArr.length} категории.`);

Array.prototype.forEach.call(listArr, (element) => {
    const listName = element.querySelector('.title').textContent
    // console.log(listName);
    const listArrLength = element.querySelectorAll('.title__list').length
    // console.log(listArrLength);
    console.log(`В категории: ${listName}, количество элементов: ${listArrLength}`);
})