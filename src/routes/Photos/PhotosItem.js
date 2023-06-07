import style from '../../index.module.css'

export default function PhotosItem ({photo}) {
    return (
        <div className={style.photosContainer}> <img src={photo.thumbnailUrl} alt={photo.title}></img></div>
    )
}