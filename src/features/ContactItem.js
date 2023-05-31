import {useDispatch} from 'react-redux'
import {edit, deleteContact, updateContactStatus} from '../store/actions/contact'

export default function ContactItem({contact}) {
    const dispatch = useDispatch()

    function onDeleteBtnClick(e) {
        e.stopPropagation()

        dispatch(deleteContact(contact.id))
    }

    function onEditBtnClick(e) {
        e.stopPropagation()
        dispatch(edit(contact))
    }

    function onTrClick(e) {
        e.stopPropagation()
        dispatch(updateContactStatus(contact))
    }

    return (
        <tr style={{ color: contact.done ? 'green' : '' }} onClick={onTrClick}>
            <td>{contact.name}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
            <td>
                <button onClick={onEditBtnClick}>Edit</button>
                <button onClick={onDeleteBtnClick}>Delete</button>
            </td>
        </tr>
    );
}