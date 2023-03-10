const button = document.querySelector('#msgButton')
const input = document.querySelector('#msgInput')
const ul = document.querySelector('#todoList')

button.addEventListener('click', onBtnClick)

function onBtnClick() {
    const userMessage = input.value
    input.value = ""

    if (userMessage !== "") {
        let li = document.createElement('li')
        li.textContent = userMessage
        ul.append(li)
    }
}