class galleryApi {
    static albumsAPI = `https://jsonplaceholder.typicode.com/albums`
    static photosAPI = `https://jsonplaceholder.typicode.com/photos?albumId=`

    static serverRequest(url, id = '') {
        return fetch(url + id)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('Can not retrieve data from server.')
            })
    }

    static getAlbumsList() {
        return galleryApi.serverRequest(this.albumsAPI)
    }

    static getPhotos(id) {
        return galleryApi.serverRequest(this.photosAPI, id)
    }
}