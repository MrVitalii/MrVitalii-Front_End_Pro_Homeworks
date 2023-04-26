class galleryApi{static albumsAPI="https://jsonplaceholder.typicode.com/albums";static photosAPI="https://jsonplaceholder.typicode.com/photos?albumId=";static serverRequest(t,e=""){return fetch(t+e).then(t=>{if(t.ok)return t.json();throw new Error("Can not retrieve data from server.")})}static getAlbumsList(){return galleryApi.serverRequest(this.albumsAPI)}static getPhotos(t){return galleryApi.serverRequest(this.photosAPI,t)}}const CLASS_ALBUM_ELEMENT=".album_element",albums=document.querySelector(".gallery_albums"),photos=document.querySelector(".gallery_photos");let albumsArray=[];function showAlbumsUI(){galleryApi.getAlbumsList().then(t=>{renderAlbums(albumsArray=t),showPhotosUI(albumsArray[0])}).catch(t=>showError(t))}function onGalleryAlbumsClick(t){t=getAlbumData(t.target);t&&showPhotosUI(t)}function getAlbumData(t){return t.closest(CLASS_ALBUM_ELEMENT)}function renderAlbums(t){t=t.map(generateAlbumsListHtml).join("");albums.innerHTML=t}function generateAlbumsListHtml(t){return`  
        <div>
        <a href="#" id="${t.id}" class="album_element"> ${t.id}. ${t.title}</a>
        </div>
    `}function renderPhotos(t){t=t.map(generatePhotosListHtml).join("");photos.innerHTML=t}function generatePhotosListHtml(t){return`  
        <div>
        <img ${t.id} src="${t.url}" class="gallery_img" alt="gallery_photo">
        </div>
    `}function showPhotosUI(t){t=t.id;galleryApi.getPhotos(t).then(t=>{renderPhotos(t)}).catch(t=>showError(t))}function showError(t){alert(t.message)}albums.addEventListener("click",onGalleryAlbumsClick),showAlbumsUI();
//# sourceMappingURL=app.js.map
