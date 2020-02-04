"use strict";

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const newListUl = document.querySelector("#ingredients");

const listIngredients = function (arr) {

  for (let el of arr) {
    const newListLi = document.createElement("li");
    newListLi.classList.add("item");
    const listText = document.createTextNode(el);
    newListLi.appendChild(listText);
    newListUl.appendChild(newListLi);
  }
  return newListUl;
};

listIngredients(ingredients);