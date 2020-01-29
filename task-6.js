'use strict'

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

const validInput = document.querySelector('#validation-input')
// console.dir(validInput);

function validation(e) {
    if (e.target.value.length == validInput.dataset.length) {
        validInput.classList.add('valid')
        validInput.classList.remove('invalid')
    } else {
        validInput.classList.add('invalid')
        validInput.classList.remove('valid')
    }
}

validInput.addEventListener('blur', validation)