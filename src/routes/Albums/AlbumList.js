import AlbumItem from '../Albums/AlbumsItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUsersAlbumsList} from '../../store/actions/UsersPhotosActions';
import { selectAlbums,selectUsers } from '../../store/selectors/UsersPhotosSelectors'

export default function AlbumList() {
    const { userId } = useParams();
    const usersList = useSelector(selectUsers)
    const users = usersList.find((user) => user.id === parseInt(userId))
    const userName = users ? users.name : ''
    const list = useSelector(selectAlbums)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(fetchUsersAlbumsList(userId));
    }, [dispatch, userId]);

    function onReturnToUsersBtnClick() {
        navigate('/users')
    }

    return (
        <div>
            <h3>Albums of user {userName}</h3>

            <button onClick={onReturnToUsersBtnClick}>Return to Users</button>

            <ul>
                {list.map(album => (
                    <AlbumItem
                        key={album.id}
                        album={album}
                    />
                ))}
            </ul>
        </div>
    );
}