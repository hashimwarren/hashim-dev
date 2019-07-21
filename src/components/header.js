import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <span>Hashim - Full Stack Marketer</span>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header