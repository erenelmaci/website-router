import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="not-found-link" to="/">Go back to the homepage</Link>
      </div>
    </div>
  )
}

export default NotFound
