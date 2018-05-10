import './styles/main.css'
console.log('It worked');

function component() {
    var element = document.createElement('div');

    element.innerHTML = "It works";
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());