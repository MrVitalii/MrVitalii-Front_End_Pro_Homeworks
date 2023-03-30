const msgInput = document.querySelector(('#msgInput'))
const findUserBtn = document.querySelector(('#findUserBtn'))
const container = document.querySelector(('#usersDataContainer'))

findUserBtn.addEventListener('click', onFindUserBtnClick)
msgInput.addEventListener('keyup', onInputKeyup)

function onFindUserBtnClick() {
    const message = msgInput.value

    fetch(`https://api.github.com/users/${message}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('User is not exist')
            }
            return response.json()
        })
        .then((data) => {
            renderUser(data)
            clear()
        })
        .catch((error) => {
            alert(error.message)
        })
}

function onInputKeyup(event) {
    if (event.key === 'Enter') {
        onFindUserBtnClick()
    }
}

function renderUser(data) {
    const html = generateHtml(data)

    container.innerHTML = html
}

function generateHtml(data) {
    return `
    <div>
        <img src="${data.avatar_url}" alt="avatar">
        <h3> Repositories: ${data.public_repos}</h3>
        <h3> Followers: ${data.followers}</h3>
        <h3> Following: ${data.following}</h3>
    </div>
  `
}

function clear() {
    msgInput.value = ''
}