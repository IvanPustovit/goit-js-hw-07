'use strict'

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const fontSize = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

// console.dir(span);
function sizeControl(e) {
    span.style.fontSize = e.target.value + 'px'
}

fontSize.addEventListener('input', sizeControl)