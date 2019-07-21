//react comes pre-installed with Gatsby
import React from 'react'

//Link is a react component
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Hello.</h1>
            <h2>I'm Hashim, a full stack marketer living in Greensboro</h2>
            <p>Need a developer? <Link to="/contact">Contact me</Link></p>
        </div>
    )
}

export default IndexPage