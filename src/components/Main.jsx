import logoHtml from "../assets/logo_html.png"
import logoCss from "../assets/logo_css.png"
import logoBrush from "../assets/logo_brush.png"
import { Link } from "react-router-dom"
import Html from "../pages/Html"

const Main = () => {
  return (
    <>
      <main className="main-container">
        <div className="main-write">
          <h1 className="main-div-h1">Professional Web Design</h1>
          <p className="main-div-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            accusamus recusandae amet debitis pariatur. Numquam repudiandae quis
            nulla impedit temporibus magnam, doloribus asperiores!
          </p>
        </div>
      </main>
      <main>
        <div className="options-div">
          <section className="sections-options main-html-section">
            <Link>
              <img className="options-png" src={logoHtml} alt="html_png" />
            </Link>
            <h4>HTML5 Markup</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex
              molestiae, iure neque non odio?
            </p>
          </section>
          <section className="sections-options main-html-section">
            <Link>
              <img className="options-png" src={logoCss} alt="html_png" />
            </Link>
            <h4>HTML5 Markup</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex
              molestiae, iure neque non odio?
            </p>
          </section>
          <section className="sections-options main-html-section">
            <Link>
              <img className="options-png" src={logoBrush} alt="html_png" />
            </Link>
            <h4>HTML5 Markup</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex
              molestiae, iure neque non odio?
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Main
