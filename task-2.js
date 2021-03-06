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

const addLi = function (el) {
  const newListLi = document.createElement("li")
  newListLi.append(el)
  return newListLi
}

const listUl = ingredients.map(el => addLi(el))

newListUl.append(...listUl)