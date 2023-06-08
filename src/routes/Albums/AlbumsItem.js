import {useDispatch, useSelector} from 'react-redux'
import {  fetchAlbumPhotos } from '../../store/actions/UsersPhotosActions'
import {Link, useParams} from 'react-router-dom'
import {selectUsers} from "../../store/selectors/UsersPhotosSelectors";

export default function AlbumsItem({ album }) {
    const {userId} = useParams()
    const dispatch = useDispatch()
    const usersList = useSelector(selectUsers)
    const users = usersList.find((users) => users.id === parseInt(userId))
    const usersId = users ? users.id : ''

    function onGetPhotosBtnClick() {
        dispatch(fetchAlbumPhotos(album.id));
    }

    return (
        <li>
            <span>{album.title}</span>
            <Link to={`/users/${usersId}/albums/${album.id}/photos`}>
                <button onClick={onGetPhotosBtnClick}>Photos</button>
            </Link>
        </li>
    )
}