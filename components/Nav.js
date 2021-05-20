import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import AuthContext from '../context/AuthContext';

function Nav(props) {
    // CSS for burger menu

    const [burgerStatus, setBurgerStatus] = useState(false);
    const [activeClass, setActiveClass] = useState("")

    const togglerHandler = (burgerStatus) => {
        setActiveClass(burgerStatus ? "" : "active");
        setBurgerStatus(!burgerStatus);
    }

    const { user } = useContext(AuthContext);

    return (
        <div className="Nav">
            <nav className="flex-row px-4">
                <Link href="/">
                    <a className="brand-image">
                        <img src="/img/logo/koffee-khayalaan-logo-white.svg" alt="Logo Koffee Khayalaan" />
                    </a>
                </Link>
                <button className="toggler btn" onClick={() => togglerHandler(burgerStatus)}>
                    {(burgerStatus ? (
                        <i className="bi bi-x" />
                    ) : (
                        <i className="bi bi-list" />
                    ))}
                </button>
                <ul className={`nav-links text-cap ${activeClass}`} >
                    <Link href="/">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link href="/store">
                        <li>
                            Store
                        </li>
                    </Link>
                    <Link href="#">
                        <li>
                            About
                        </li>
                    </Link>
                    {
                        user ?
                            <Link href="/account" passHref><a href="/account" className="btn account mx-2"><i class="bi bi-person-fill"></i>{user.email.slice(0, 10)}{user.email.length >= 20 ? "..." : ""}</a></Link>
                            :
                            <Link href="/login" passHref><a href="/login" className="btn login mx-2">Login</a></Link>
                    }
                </ul>
            </nav>


        </div>
    );
}
export default Nav;
