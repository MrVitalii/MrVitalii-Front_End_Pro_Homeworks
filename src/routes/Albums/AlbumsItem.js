import { useDispatch } from 'react-redux'
import {  fetchAlbumPhotos } from '../../store/actions/UsersPhotosActions'
import { Link } from 'react-router-dom'

export default function AlbumsItem({ album }) {
    const dispatch = useDispatch()

    function onGetPhotosBtnClick() {
        dispatch(fetchAlbumPhotos(album.id));
    }

    return (
        <li>
            <span>{album.title}</span>
            <Link to={`/photos/${album.id}`}>
                <button onClick={onGetPhotosBtnClick}>Photos</button>
            </Link>
        </li>
    )
}