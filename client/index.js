const CLASS_CLEAR_BTN = 'clearBtn'
const ws = new WebSocket('ws://localhost:8080')
const form = document.querySelector('#formWs')
const messageContainer = document.querySelector('#messageContainer')
let chatHistory = []

form.addEventListener('focusout', onFormFocusOut)
form.addEventListener('submit', onFormSubmit)
form.addEventListener('click', onFormClick)

init()

function init() {
    const str = localStorage.getItem('CHAT_DATA_KEY')

    try {
        const parsed = JSON.parse((str))
        form.name.value = JSON.parse(localStorage.getItem('USER_NAME_KEY'))
        form.message.value = JSON.parse(localStorage.getItem('USER_MESSAGE_KEY'))

        if (parsed) {
            chatHistory = parsed

            parsed.forEach(data => {
                const html = generateChatHtml(data);
                messageContainer.insertAdjacentHTML('beforeend', html)
            })
        }

    } catch (e) {
        console.info('Can not parse user data')
    }
}

function onFormFocusOut() {
    const usersData = getData()

    localStorage.setItem('USER_NAME_KEY', JSON.stringify(usersData.name))
    localStorage.setItem('USER_MESSAGE_KEY', JSON.stringify(usersData.message))
}

function onFormSubmit(e) {
    e.preventDefault()
    const usersData = getData()

    if (!isClearBtn(e.target) && !isDataValid(usersData)) {
        showError('Enter valid data')
    } else {
        localStorage.removeItem('USER_NAME_KEY')
        localStorage.removeItem('USER_MESSAGE_KEY')
        ws.send(JSON.stringify(usersData))
        chatHistory.push(usersData)
        localStorage.setItem('CHAT_DATA_KEY', JSON.stringify(chatHistory))
    }

    form.reset()
}

function onFormClick(e) {
    const target = e.target

    if (isClearBtn(target)) {
        localStorage.removeItem('CHAT_DATA_KEY')
        messageContainer.innerHTML = ''
    }
}

function isClearBtn(el) {
    return el.classList.contains(CLASS_CLEAR_BTN)
}

ws.onmessage = (event) => {
    try {
        const data = JSON.parse(event.data)
        const html = generateChatHtml(data)
        messageContainer.insertAdjacentHTML('beforeend', html)
    } catch (e) {
        console.info('Can not parse data')
    }
}

function getData() {
    return {
        name: form.name.value,
        message: form.message.value
    }
}

function isDataValid(user) {
    return (
        user.name !== '' && user.message !== ''
    )
}

function generateChatHtml(data) {
    return `
      <div class="chatItem">
        <span class="name">${data.name}:</span>
        <span class="message">${data.message}</span>
      </div>
  `
}

function showError(error) {
    alert(error)
}

ws.onopen = () => {
    console.info('Connection was established')
}

ws.onclose = () => {
    console.info('Connection was stopped')
}

ws.onerror = (error) => {
    console.info('Connection was interrupted: ', error.message)
}