const contactsTable = document.querySelector('#contactsTable')
const contactsList = document.querySelector('#ContactsList')
const nameInput = document.querySelector('#nameInput')
const surnameInput = document.querySelector('#surnameInput')
const phoneInput = document.querySelector('#phoneInput')
const contactInputs = document.querySelector('#contactInputs')
const button = document.querySelector('#actionButton')


button.addEventListener('click', onButtonClick)
contactsList.addEventListener('click', onContactsList)
contactInputs.addEventListener('keyup', onContactInputsKeyup)

init()

function init() {
    ContactsApi
        .getList()
        .then((list) => {
            renderContactList(list)
        })
        .catch(err => showError(err))
}

function onButtonClick() {
    const contact = getContact()

    if (!isContactValid(contact)) {
        alert('Некорректные данные. Заполните поля Name, Surname, Phone');
        return
    }

    ContactsApi
        .create(contact)
        .then((newContact) => {
            renderContact(newContact)
            clearForms()
        })
        .catch(err => showError(err))
}

function onContactsList(e) {
    const tr = e.target.closest('tr')
    const id = tr.getAttribute('id')

    if (e.target.classList.contains('deleteBtn')) {
        ContactsApi
            .delete(id)
            .then(() => {
                deleteContact(tr)
            })
            .catch(err => showError(err))
    }
}

function onContactInputsKeyup(e) {
    if (e.key === 'Enter') {
        onButtonClick()
    }
}

function getContact() {
    return {
        name: nameInput.value.trim(),
        surname: surnameInput.value.trim(),
        phone: phoneInput.value.trim(),
    }
}

function isContactValid(contact) {
    return (
        contact.name !== '' && contact.surname !== '' && contact.phone !== '' && !isNaN(contact.phone)
    );
}

function showError(error) {
    alert(error.message)
}

function renderContactList(list) {
    const html = list.map(generateContactHtml).join('')

    contactsList.innerHTML = html
}

function renderContact() {
    const contact = getContact()
    const html = generateContactHtml(contact)
    const tbody = contactsTable.querySelector('tbody')
    tbody.insertAdjacentHTML('beforeend', html)
}

function generateContactHtml(contact) {
    return `
      <tr id="${contact.id}">
      <td class="txt-center">${contact.name}</td>
      <td class="txt-center">${contact.surname}</td>
      <td class="txt-center">${contact.phone}</td>
      <td>
      <button type="button" class="editBtn">Edit</button>
      <button type="button" class="deleteBtn">Delete</button>
      </td>
    </tr>
  `
}

function deleteContact(tr) {
    contactsList.removeChild(tr)
}

function clearForms() {
    nameInput.value = ''
    surnameInput.value = ''
    phoneInput.value = ''
}