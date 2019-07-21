import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <div>
            <h1>About Hashim Warren</h1>
            <p>I was born in New York City on a Sunday...</p>
            <p><Link to="/contact">Contact me</Link></p>
            <Footer />
        </div>

    )
}

export default AboutPage