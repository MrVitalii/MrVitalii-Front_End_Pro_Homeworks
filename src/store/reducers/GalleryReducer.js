import {
    ACTION_SET_USERS_LIST,
    ACTION_SET_ALBUMS_LIST,
    ACTION_SET_GALLERY_LIST,

} from '../actions/UsersPhotosActions'

export const initialState = {
    usersList : [],
    albumsList : [],
    galleryList :[],
}

export default function galleryReducer(state = initialState, {type, payload}) {

    switch(type) {
        case ACTION_SET_USERS_LIST: {
            return { ...state, usersList: payload }
        }
        case ACTION_SET_ALBUMS_LIST: {
            return { ...state, albumsList: payload, albumsItem: {} }
        }
        case ACTION_SET_GALLERY_LIST: {
            return { ...state, galleryList: payload }
        }

        default: return state
    }
}