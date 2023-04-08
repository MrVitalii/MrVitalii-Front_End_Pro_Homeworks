const CLASS_ALBUM_ELEMENT = '.album_element'
const albums = document.querySelector('.gallery_albums')
const photos = document.querySelector('.gallery_photos')
let albumsArray = []

albums.addEventListener('click', onGalleryAlbumsClick)

showAlbumsUI()

function showAlbumsUI() {
    galleryApi
        .getAlbumsList()
        .then((list) => {
            albumsArray = list
            renderAlbums(list)
            showPhotosUI(albumsArray[0])
        })
        .catch(e => showError(e))
}

function onGalleryAlbumsClick(e) {
    const target = e.target
    const album = getAlbumData(target)

    if (!album) {
        return
    }

    showPhotosUI(album)
}

function getAlbumData(el) {
    return el.closest(CLASS_ALBUM_ELEMENT)
}

function renderAlbums(list) {
    const html = list.map(generateAlbumsListHtml).join('')

    albums.innerHTML = html
}

function generateAlbumsListHtml(album) {
    return `  
        <div>
        <a href="#" id="${album.id}" class="album_element"> ${album.id}. ${album.title}</a>
        </div>
    `
}

function renderPhotos(list) {
    const html = list.map(generatePhotosListHtml).join('')

    photos.innerHTML = html
}

function generatePhotosListHtml(photo) {
    return `  
        <div>
        <img ${photo.id} src="${photo.url}" class="gallery_img" alt="gallery_photo">
        </div>
    `
}

function showPhotosUI(album) {
    const id = album.id
    galleryApi
        .getPhotos(id)
        .then((list) => {
            renderPhotos(list)
        })
        .catch(e => showError(e))
}

function showError(error) {
    alert(error.message)
}