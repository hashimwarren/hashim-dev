import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Hashim, a full stack marketer, from North Carolina</h2>
      <p>
        Need help growing your company? <a href="/contact"> Contact me</a>
      </p>
      <p>
        Need help growing your company? <Link to="/contact">Contact me</Link>
      </p>
    </div>
  )
}

export default IndexPage
