import ContactItem from './ContactItem'
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react";
import {fetchContacts} from "../store/actions/contact";

export default function ContactList() {
    const list = useSelector(state => state.contact.list)
    const dispatch = useDispatch ()

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {list.map((contact) => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                />
            ))}
            </tbody>
        </table>
    )

}