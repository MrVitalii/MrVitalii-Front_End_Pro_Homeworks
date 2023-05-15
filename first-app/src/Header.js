import header_logo from './images/ApertureHeaderLogo.svg'

export default function Header() {
    return (
        <header className={'Header'}>
            <a>
                <img src={header_logo} alt="logo" className={'Header_logo'}/>
            </a>

            <nav>
                <ul>
                    <input type="text" placeholder="Search"/>

                    <li>
                        <a href="#">Business areas</a>
                    </li>
                    <li>
                        <a href="#">Featured images</a>
                    </li>
                    <li>
                        <a href="#">Gear cage</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Get template</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}