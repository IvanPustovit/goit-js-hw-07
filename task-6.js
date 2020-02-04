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

function validation(e) {
    validInput.classList.add('invalid');
    if (e.target.value.length == validInput.dataset.length) {
        validInput.classList.add('valid');
        validInput.classList.remove('invalid');
    } 
}

validInput.addEventListener('blur', validation)