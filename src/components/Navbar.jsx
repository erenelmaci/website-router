import { Link } from "react-router-dom"
import "../style/Navbar.css"

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="header-div">
          <h3 className="purple-h3">Clarusway</h3>
          <h3 className="white-h3">Web Design</h3>
        </div>
        <div className="header-div-links">
          <ul className="header-ul">
            <li>
              <Link style={{ color: "#a9508b" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
      </header>
      <nav className="main-subscribe">
        <h4 className="subscribe-main-h4">Subscribe To Our Newsletter</h4>
        <form action="login" className="form-subscribe">
          <input
            className="subscribe-email"
            type="email"
            name="email"
            placeholder="Enter Email..."
            required
          />
          <input
            className="subscribe-button"
            type="button"
            defaultValue="Subscribe"
          />
        </form>
      </nav>
    </>
  )
}

export default Navbar
