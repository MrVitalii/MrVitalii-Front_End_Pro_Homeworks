const contactTemplate = ({name, surname, phone}) => `
  <tr>
    <th>${name}</th>
    <th>${surname}</th>
    <th>${phone}</th>
  </tr>
`

const contactsTable = document.querySelector('#contactsTable')
const nameInput = document.querySelector('#nameInput')
const surnameInput = document.querySelector('#surnameInput')
const phoneInput = document.querySelector('#phoneInput')

const validateInputs = () => {
    const name = nameInput.value.trim()
    const surname = surnameInput.value.trim()
    const phone = phoneInput.value.trim()

    if (name === '' || surname === '' || phone === '' || isNaN(Number(phone))) {
        alert('Некорректные данные. Заполните поля Name, Surname, Phone')
        return false
    }
    return true
}

const addContact = () => {
    if (validateInputs()) {
        const name = nameInput.value.trim()
        const surname = surnameInput.value.trim()
        const phone = phoneInput.value.trim()

        const newContact = {name, surname, phone}

        const nextRow = contactTemplate(newContact);
        const tbody = contactsTable.querySelector('tbody')
        tbody.insertAdjacentHTML('beforeend', nextRow)

        nameInput.value = ''
        surnameInput.value = ''
        phoneInput.value = ''
    }
}