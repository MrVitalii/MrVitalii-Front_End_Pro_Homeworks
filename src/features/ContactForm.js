import {useDispatch, useSelector} from 'react-redux'
import {deleteContact, save} from '../store/actions/contact'
import { Formik } from 'formik'
import * as Yup from 'yup'
import {DEFAULT_CONTACT} from "../store/reducers/contactReducer"
import style from '../index.module.css'

const CONTACT_TEMPLATE = /^\d{3}-\d{3}-\d{4}$/

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, '(Name must be more than 2 symbols)')
        .required('Required'),
    lastName: Yup.string()
        .min(5, '(Last name must be more than 4 symbols)')
        .required('Required'),
    phone: Yup.string()
        .matches(CONTACT_TEMPLATE, '(Phone must be format 000-000-0000)')
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
        const doneContacts = contactList.filter(contact => contact.done);

        doneContacts.forEach((contact, deleteContactTimeout) => {
            setTimeout(() => {
                dispatch(deleteContact(contact.id));
            }, deleteContactTimeout * 600);
        })
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
                    </label>

                    <label htmlFor='lastName'>
                        <input
                            placeholder='Last name'
                            type='text'
                            id='lastName'
                            value={values.lastName}
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor='phone'>
                        <input
                            placeholder='Phone'
                            type='tel'
                            id='phone'
                            value={values.phone}
                            onChange={handleChange}
                        />

                        <button type={"submit"} onClick={save}>Save</button>
                        <button type={"button"} onClick={onDeleteSelectedBtnClick}>Delete selected</button>
                    </label>

                   <div className={style.errorsContainer}>
                       {errors.name && touched.name ?
                           (<span
                           className={style.validationError}>{errors.name}
                           </span>) : null}

                       {errors.lastName && touched.lastName?
                           (<span
                           className={`${style.validationError} 
                           ${style.errorsDistance}`}>
                           {errors.lastName}
                           </span>) : null}

                       {errors.phone && touched.phone ?
                           (<span
                           className={`${style.validationError} 
                           ${style.errorsDistance}`}>
                           {errors.phone}
                           </span>) : null}
                   </div>
                </form>
            )}
        </Formik>
    )
}