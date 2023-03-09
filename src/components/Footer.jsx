import { Link } from "react-router-dom"
import bannerlogo from "../assets/bannerlogo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <p>Clarusway Web Design, Copyright © 2022</p>
          <Link to="https://www.linkedin.com/in/erenelmac%C4%B1/">
            <img src={bannerlogo} alt="clarusway logo" />
          </Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
