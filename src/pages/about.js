import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout>
            <h1>About Hashim Warren</h1>
            <p>I was born in New York City on a Sunday...</p>
            <p><Link to="/contact">Contact me</Link></p>
        </Layout>

    )
}

export default AboutPage