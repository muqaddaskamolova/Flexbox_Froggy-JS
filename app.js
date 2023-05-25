const buttonElement = document.querySelector('button')

function addCSS (){
const textareaElement = document.querySelector('textarea')
const css = textareaElement.value
const viewFront = document.querySelector('#view')
viewFront.style.cssText = css
console.log(viewFront);
}

buttonElement.addEventListener('click', addCSS)