import UsersPhotosApi from "../../api/UsersPhotosApi"

export const ACTION_SET_USERS_LIST = 'ACTION_SET_USERS_LIST'
export const ACTION_SET_ALBUMS_LIST = 'ACTION_SET_ALBUMS_LIST'
export const ACTION_SET_GALLERY_LIST = 'ACTION_SET_GALLERY_LIST'

export function fetchUsersList() {
    return (dispatch) => {
        UsersPhotosApi.getUsersList().then((usersList) => {
            dispatch(setUsersList(usersList))
        })
    }
}

export function fetchUsersAlbumsList(userId) {
    return (dispatch) => {
        UsersPhotosApi.getAlbumsList(userId).then((albumsList) => {
            dispatch(setAlbumsList(albumsList))
        })
    }
}

export function fetchAlbumPhotos(albumId) {
    return (dispatch) => {
        UsersPhotosApi.getAlbumPhotos(albumId).then((photosList) => {
            dispatch(setPhotosList(photosList));
        });
    };
}

export function setUsersList(usersList) {
    return {type: ACTION_SET_USERS_LIST, payload: usersList}
}

export function setAlbumsList(albumsList) {
    return {type: ACTION_SET_ALBUMS_LIST, payload: albumsList}

}

export function setPhotosList(PhotosList) {
    return {type: ACTION_SET_GALLERY_LIST, payload: PhotosList}
}