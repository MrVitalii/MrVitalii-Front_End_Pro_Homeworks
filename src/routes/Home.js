import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to = '/users'>
                <button>LET'S CHOOSE THE USER</button>
            </Link>
        </div>

    )
}