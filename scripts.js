const CLASS_CONTACT_ITEM = 'contactItem'
const CLASS_DELETE_BTN = 'deleteBtn'
const CLASS_EDIT_BTN = 'editBtn'
const contactContainer = document.querySelector('#contactsContainer')
const form = document.querySelector('#contactForm')
let contactList = []

form.addEventListener('submit', onFormSubmit)
form.addEventListener('keyup', onContactInputsKeyup)
contactContainer.addEventListener('click', onContactContainerClick)

ContactsApi
    .getList()
    .then((list) => {
        renderContactList(list)
        contactList = list
    })
    .catch(e => showError(e))

function onFormSubmit(e) {
    e.preventDefault()

    const contact = getContactData()

    if (!isContactValid(contact)) {
        showError(new Error('Некорректные данные. Заполните поля Name, Last name, Phone'))
        return
    }

    if (contact.id) {
        ContactsApi
            .update(contact.id, contact)
            .then((newContact) => {
                replaceContact(contact.id, newContact)
                clearForm()
                contactList = contactList.map(contactItem => contactItem.id === contact.id ? newContact : contactItem)
            })
            .catch(e => showError(e))
    } else {
        ContactsApi
            .create(contact)
            .then((newContact) => {
                renderContact(newContact)
                clearForm()
                contactList.push(newContact)
            })
            .catch(e => showError(e))
    }
}

function onContactInputsKeyup(e) {
    if (e.key === 'Enter') {
        onFormSubmit()
    }
}

function onContactContainerClick(e) {
    const target = e.target
    const contactEl = findContactEl(target)

    if (!contactEl) {
        return
    }
    if (isDeleteBtn(target)) {
        deleteContactEl(contactEl)
    } else if (isEditBtn(target)) {
        editContactEl(contactEl)
    }
}

function isDeleteBtn(el) {
    return el.classList.contains(CLASS_DELETE_BTN)
}

function isEditBtn(el) {
    return el.classList.contains(CLASS_EDIT_BTN)
}

function findContactEl(el) {
    return el.closest('.' + CLASS_CONTACT_ITEM)
}

function getContactData() {
    const id = form.id.value
    const contact = findContactById(id) || {}

    return {
        ...contact,
        name: form.name.value,
        lastName: form.lastName.value,
        phone: form.phone.value,
    }
}

function deleteContactEl(el) {
    const id = getContactElId(el)

    ContactsApi
        .delete(id)
        .catch(e => showError(e))

    el.remove()
    contactList = contactList.filter(contactItem => contactItem.id !== id)
}

function editContactEl(el) {
    const id = getContactElId(el)
    const contact = findContactById(id)

    fillForm(contact)
}

function isContactValid(contact) {
    return (
        contact.name !== '' && contact.lastName !== '' && contact.phone !== '' && !isNaN(contact.phone)
    )
}

function renderContactList(list) {
    const html = list.map(generateContactHtml).join('')

    contactContainer.innerHTML = html
}

function replaceContact(id, contact) {
    const oldContactEl = document.querySelector(`[data-id="${id}"]`)
    const newContactEl = generateContactHtml(contact)

    oldContactEl.outerHTML = newContactEl
}

function renderContact(contact) {
    const html = generateContactHtml(contact)

    contactContainer.insertAdjacentHTML('beforeend', html)
}

function generateContactHtml(contact) {
    const done = contact.done ? ' done' : ''
    return `
    <tr
      class="contactItem"
      data-id="${contact.id}"
    >
      <td class="txt-center">${contact.name}</td>
      <td class="txt-center">${contact.lastName}</td>
      <td class="txt-center">${contact.phone}</td>
      <td>
        <span>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </span>
      </td>
    </tr>
  `
}

function clearForm() {
    form.reset()
    form.id.value = ''
}

function fillForm(contact) {
    form.id.value = contact.id
    form.name.value = contact.name
    form.lastName.value = contact.lastName
    form.phone.value = contact.phone
}

function showError(error) {
    alert(error.message)
}

function getContactElId(el) {
    return el.dataset.id
}

function findContactById(id) {
    return contactList.find(contact => contact.id === id)
}