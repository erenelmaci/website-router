import bannerlogo from "../assets/bannerlogo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <p>Clarusway Web Design, Copyright © 2022</p>
          <img src={bannerlogo} alt="clarusway logo" />
        </div>
      </footer>
    </>
  )
}

export default Footer
