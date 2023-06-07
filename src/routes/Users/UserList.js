import { useEffect } from "react"
import { fetchUsersList } from "../../store/actions/UsersPhotosActions"
import {useSelector, useDispatch} from 'react-redux'
import UserItem from "./UserItem"
import { selectUsers } from '../../store/selectors/UsersPhotosSelectors'

export default function UsersList() {
    const usersList = useSelector(selectUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersList())
    }, [dispatch])

    return (
        <ul>
            {usersList.map(user =>
                <UserItem
                    user={user}
                    key={user.id}
                />)}
        </ul>
    )
}