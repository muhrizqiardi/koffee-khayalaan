import { useEffect, useState } from 'react'
import Link from 'next/link'

function Nav(props) {
    // CSS for burger menu

    const [burgerStatus, setBurgerStatus] = useState(false);
    const [activeClass, setActiveClass] = useState("")

    const togglerHandler = (burgerStatus) => {
        setActiveClass(burgerStatus ? "" : "active");
        setBurgerStatus(!burgerStatus);
    }

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
                            Promo
                        </li>
                    </Link>
                    <Link href="#">
                        <li>
                            Career
                        </li>
                    </Link>
                    <Link href="#">
                        <li>
                            Contact
                        </li>
                    </Link>
                    <Link href="#">
                        <li>
                            About
                        </li>
                    </Link>
                    <button className="btn mx-2">Call Us</button>
                    <div className="cart">
                        <i class="bi bi-cart" style={{ "color": "white", fontSize: "1.5em", cursor: "pointer" }}></i>
                    </div>
                </ul>
            </nav>


        </div>
    );
}
export default Nav;
