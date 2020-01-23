// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listIngredients = document.createElement('ul')
listIngredients.id = 'ingredients'
const newList = document.createElement('li')

var totalSum = ingredients.reduce(function (sum, item) {
    
        newList.textContent = sum;
        return item;
    },listIngredients[0]);

// function getSums(arr) {
//     const newList = document.createElement('li') 
//     // if (!arr.length) return newList;

//     var totalSum = arr.reduce(function (sum, item) {
//         newList.textContent = sum;
//         return sum;
//     },listIngredients[0]);
//     // totalSum;

//     return totalSum;
// }

console.log(totalSum);


// const addList = function(){
//     const listIngredients = document.createElement('ul')
//     listIngredients.id = 'ingredients'
// console.log(listIngredients);

//     const newList = document.createElement('li')
//     for(i = 0; i < length; i = i + 1){

//     }



// }


// console.log(addList(ingredients));


// const listIngredients = document.createElement('ul')
// listIngredients.id = 'ingredients'
// const newList = document.createElement('li')

// let c = ingredients.reduce()
// let ele
// for(let el of ingredients){
//     ele = el
// newList.textContent = el
// listIngredients.appendChild(newList)
// console.log(newList);
// console.log(listIngredients);

// console.log(el);
// }
//  console.log(ele);
// // listIngredients.append(newList)
// newList.textContent = (ingredients[ele])

// const insertList = function (ingredients) {

// }
// console.log(listIngredients);
// console.log(newList);
// console.log(ingredients);