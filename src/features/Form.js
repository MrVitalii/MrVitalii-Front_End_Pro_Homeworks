import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteContact, save} from '../store/actions/contact'

export default function Form() {
    const dispatch = useDispatch()
    const contactEdit = useSelector(state => state.contact.contactEdit)
    const contactList = useSelector(state => state.contact.list)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        if (contactEdit.name ) {
            setName(contactEdit.name)
        }

        if (contactEdit.lastName) {
            setLastName(contactEdit.lastName)
        }

        if ( contactEdit.phone) {
            setPhone(contactEdit.phone)
        }
    }, [contactEdit])

    function onContactChange(e) {
        const { id, value } = e.target

        if (id === 'name') {
            setName(value)

        } else if (id === 'lastName') {
            setLastName(value)

        } else if (id === 'phone') {
            setPhone(value)
        }
    }

    function onSubmit(e) {
        e.preventDefault()

        const contact = {
            ...contactEdit,
            name,
            lastName,
            phone
        }

        if (!isContactValid(contact)) {
            alert(new Error('Enter valid data'))
            return
        }

        dispatch(save(contact))
        setName('')
        setLastName('')
        setPhone('')
    }

    function onDeleteSelectedBtnClick() {
        const doneContacts = contactList.filter(contact => contact.done)

        doneContacts.forEach(contact => dispatch(deleteContact(contact.id)))
    }

    function isContactValid(contact) {
        return contact.name !== '' && contact.lastName !== '' && contact.phone !== ''
    }

    return (
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={onContactChange}
                />
                <input
                    type='text'
                    id='lastName'
                    value={lastName}
                    onChange={onContactChange}
                />
                <input
                    type='tel'
                    id='phone'
                    value={phone}
                    onChange={onContactChange}
                />
                <button type='submit'>Save</button>
                <button type='button' onClick={onDeleteSelectedBtnClick}>Delete selected</button>
            </form>
    )
}