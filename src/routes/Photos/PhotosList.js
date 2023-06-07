import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbumPhotos } from '../../store/actions/UsersPhotosActions';
import {selectPhotos} from '../../store/selectors/UsersPhotosSelectors';
import PhotosItem from "../Photos/PhotosItem"

export default function PhotosList() {
    const {  albumId } = useParams();
    const dispatch = useDispatch()
    const filterPhotos = useSelector(selectPhotos)

    useEffect(() => {
        if (albumId) {
            dispatch(fetchAlbumPhotos(albumId))
        }
    }, [dispatch, albumId]);


    return (
        <div>
            <h3>Photos</h3>

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