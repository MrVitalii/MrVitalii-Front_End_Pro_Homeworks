import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchAlbumPhotos } from '../../store/actions/UsersPhotosActions';
import {selectPhotos} from '../../store/selectors/UsersPhotosSelectors';
import PhotosItem from "../Photos/PhotosItem"
import style from '../../index.module.css'

export default function PhotosList() {
    const {  albumId } = useParams()
    const dispatch = useDispatch()
    const filterPhotos = useSelector(selectPhotos)
    const navigate = useNavigate()

    useEffect(() => {
        if (albumId) {
            dispatch(fetchAlbumPhotos(albumId))
        }
    }, [dispatch, albumId])

    function onReturnToAlbumsBtnClick() {
        navigate(`/albums/1`)
    }


    return (
        <div>
            <h3>Photos</h3>

            <button className={style.returnButton} onClick={onReturnToAlbumsBtnClick}>Return to Albums</button>

            <div className='UsersContainer'>
                {filterPhotos.map((photo) => (
                    <PhotosItem
                        key={photo.id}
                        photo={photo} />
                ))}
            </div>
        </div>
    );
}