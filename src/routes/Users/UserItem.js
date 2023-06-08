import {useDispatch} from 'react-redux'
import {fetchUsersAlbumsList} from '../../store/actions/UsersPhotosActions'
import {Link} from 'react-router-dom'

export default function UserItem({user}) {
    const dispatch = useDispatch()

    function onAlbumsBtnClick() {
        dispatch(fetchUsersAlbumsList(user.id));

    }

    return (
        <li>
            <span>{user.name}</span>
            <Link to={`/users/albums/${user.id}`}>
                <button onClick={onAlbumsBtnClick}>Albums</button>
            </Link>
        </li>
    );
}