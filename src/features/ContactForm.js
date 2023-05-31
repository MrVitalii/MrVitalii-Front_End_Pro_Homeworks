import {useDispatch, useSelector} from 'react-redux'
import {deleteContact, save} from '../store/actions/contact'
import { Formik, useFormikContext } from 'formik'
import * as Yup from 'yup'
import {DEFAULT_CONTACT} from "../store/reducers/contactReducer"

const CONTACT_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'name must be > 2 symbols')
        .required('Required'),
    lastName: Yup.string()
        .min(5, 'lastName must be > 4 symbols')
        .required('Required'),
    phone: Yup.string()
        .matches(CONTACT_TEMPLATE, 'Must be 000-000-0000')
        .required('Required')
})

export default function ContactForm() {
    const dispatch = useDispatch()
    const contactEdit = useSelector(state => state.contact.contactEdit)
    const contactList = useSelector(state => state.contact.list)

    function onSubmit (value, actions) {
        const contact = {
            ...contactEdit,
            ...value,
        }

        actions.resetForm({
            values: DEFAULT_CONTACT,
        });

        dispatch(save(contact))
    }
    function onDeleteSelectedBtnClick() {
        const doneContacts = contactList.filter(contact => contact.done)

        doneContacts.forEach(contact => dispatch(deleteContact(contact.id)))
    }

    return (
        <Formik enableReinitialize
                initialValues={contactEdit}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >

            {({ values, errors, touched, handleSubmit, handleChange}) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        <input
                            placeholder='Name'
                            type='text'
                            id='name'
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                    </label>

                    <label htmlFor='lastName'>
                        <input
                            placeholder='Last name'
                            type='text'
                            id='lastName'
                            value={values.lastName}
                            onChange={handleChange}
                        />
                        {errors.lastName && touched.lastName? (<div>{errors.lastName}</div>) : null}
                    </label>

                    <label htmlFor='phone'>
                        <input
                            placeholder='Phone'
                            type='tel'
                            id='phone'
                            value={values.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && touched.phone ? (<div>{errors.phone}</div>) : null}
                        <SaveBtn/>
                        <button type={"button"} onClick={onDeleteSelectedBtnClick}>Delete selected</button>

                    </label>
                </form>
            )}
        </Formik>
    )

    function SaveBtn () {
        const { isValid } = useFormikContext();

        return <button type='submit' disabled={!isValid}>Save</button>
    }
}