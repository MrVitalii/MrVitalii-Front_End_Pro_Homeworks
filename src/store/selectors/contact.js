// import { createSelector } from 'reselect'
// import { FILTERS } from '../reducers/contactReducer'

export const selectContacts = state => state.contact.list
export const selectContactEdit = state => state.contact.contactEdit

// export const selectFilteredContactList = createSelector(
//   selectContacts,
//   (state) => state.contact.filter
//   (list, filter) => {
//     if (filter === FILTERS.Active) {
//       return list.filter(contact => contact.done === false)
//     }
//     if (filter === FILTERS.Done) {
//       return list.filter(contact => contact.done === true)
//     }
//
//     return list
//   }
// )