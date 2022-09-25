import React from "react"
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav>
            <ul>
                <li>Ilustraciones</li>
                <li>Mates</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar