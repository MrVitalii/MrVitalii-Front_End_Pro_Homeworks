const contactsTable = document.querySelector('#contactsTable')
const nameInput = document.querySelector('#nameInput')
const surnameInput = document.querySelector('#surnameInput')
const phoneInput = document.querySelector('#phoneInput')
const button = document.querySelector('#actionButton')

button.addEventListener('click', onButtonClick)

function onButtonClick() {
    const contact = getContact()

    if (!isContactValid(contact)) {
        alert('Некорректные данные. Заполните поля Name, Surname, Phone');
        return
    }

    renderContact(contact)

    cleanForms()
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
        contact.name !== '' && contact.surname !== '' && contact.phone !== '' && !isNaN(Number(contact.phone))
    );
}

function renderContact() {
    const contact = getContact()
    const contactTemplate = ({name, surname, phone}) => `
    <tr>
      <td>${name}</td>
      <td>${surname}</td>
      <td>${phone}</td>
    </tr>
  `;
    const nextRow = contactTemplate(contact)
    const tbody = contactsTable.querySelector('tbody')
    tbody.insertAdjacentHTML('beforeend', nextRow)
}

function cleanForms() {
    nameInput.value = ''
    surnameInput.value = ''
    phoneInput.value = ''
}