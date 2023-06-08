export default class UsersPhotosApi {
    static API = `https://jsonplaceholder.typicode.com/`
    static request(error, url, id = '', body, method = 'GET') {
        return fetch(UsersPhotosApi.API + url + id, {
            method: method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(error)
            })
    }
    static getUsersList() {
        return this.request('cant retrieve users list from server', 'users/')
    }
    static getAlbumPhotos(albumId) {
        return this.request('cant retrieve photos list from server', `photos?albumId=${albumId}`);
    }

    static getAlbumsList(userId) {
        return this.request('cant retrieve albums list from server', 'albums?userId=' + userId)
    }
}