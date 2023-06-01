import {
    ACTION_CONTACT_CREATE,
    ACTION_CONTACT_REMOVE,
    ACTION_CONTACT_EDIT, ACTION_CONTACT_UPDATE, ACTION_SET_CONTACT_LIST
} from '../actions/contact'

export const DEFAULT_CONTACT =   {
    name: '',
    lastName: '',
    phone: ''}

const initialState = {
    list: [],
    contactEdit: DEFAULT_CONTACT
}

export default function contactReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ACTION_CONTACT_CREATE:
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        ...payload,
                    }
                ]
            }

        case ACTION_CONTACT_REMOVE:
            const newList = state.list.filter((contact) => contact.id !== payload)
            return {...state,
                list: newList,
            }

        case ACTION_CONTACT_EDIT: return {...state, contactEdit: payload}
        case ACTION_SET_CONTACT_LIST: return {...state, list: payload}
        case ACTION_CONTACT_UPDATE:
            return {
                ...state,
                list: state.list.map(contact => contact.id === payload.id ? payload : contact),
                contactEdit: DEFAULT_CONTACT
            }

        default: return state
    }
}