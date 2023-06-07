import { combineReducers } from 'redux'
import galleryReducer from './GalleryReducer'

export const rootReducer = combineReducers({
    UsersGallery: galleryReducer
})