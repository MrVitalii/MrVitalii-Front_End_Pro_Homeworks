import ContactsApi from "../../api/ContactsApi"

export const ACTION_CONTACT_CREATE = 'create'
export const ACTION_CONTACT_REMOVE = 'remove'
export const ACTION_CONTACT_EDIT = 'edit'
export const ACTION_CONTACT_UPDATE = 'update'
export const ACTION_SET_CONTACT_LIST = 'set-contact-list'

export function create(contact) {
    return {type: ACTION_CONTACT_CREATE, payload: contact}
}

export function remove(id) {
    return {type: ACTION_CONTACT_REMOVE, payload: id}
}

export function edit(contact) {
    return {type: ACTION_CONTACT_EDIT, payload: contact}
}

export function update(contact) {
    return {type: ACTION_CONTACT_UPDATE, payload: contact}
}

export function setContactList(list) {
    return {type: ACTION_SET_CONTACT_LIST, payload: list}
}

export function fetchContacts() {
    return (dispatch) => {
        ContactsApi.getList().then((newList) => {
            dispatch(setContactList(newList))
        })
    }
}

export function deleteContact(id) {
    return (dispatch) => {
        ContactsApi.delete(id).then(() => {
            dispatch(remove(id))
        })
    }
}

export function updateContactStatus (contact) {
    const newContact = {
        ...contact,
        done: !contact.done,
    };

    return save(newContact)
}

export function save(contact) {
    return (dispatch) => {
        if (contact.id) {
            ContactsApi.update(contact.id, contact).then(() => {
                dispatch(update(contact))
            })
        } else {
            ContactsApi.create(contact).then((contactWithId) => {
                dispatch(create(contactWithId))
            })
        }
    }
}