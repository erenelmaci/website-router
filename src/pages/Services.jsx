import React from 'react'

const Services = () => {
  return (
    <>
      <main className="main-services">
        <main>
          <h3 className="services-h3">Services</h3>
          <div className="services-alldiv">
            <h3>Website Design</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              expedita eaque, quia eligendi ad consequatur animi! Doloribus culpa
              libero quis ratione. <br /><br />
              Pricing: $1,000-$3,000 per month
            </p>
          </div>
          <div className="services-alldiv">
            <h3>Website Maintenance</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              expedita eaque, quia eligendi ad consequatur animi! Doloribus culpa
              libero quis ratione. <br /><br />
              Pricing: $250 per month
            </p>
          </div>
          <div className="services-alldiv">
            <h3>Website Hosting</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              expedita eaque, quia eligendi ad consequatur animi! Doloribus culpa
              libero quis ratione. <br /><br />
              Pricing: $25 per month
            </p>
          </div>
        </main>
        <main className="form">
          <div className="services-right">
            <h3>Get A Quote</h3>
            <form action>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Email Address" />
              <label htmlFor="message">Message</label>
              <textarea name id="message" cols={30} rows={10} placeholder="Massage" defaultValue={""} />
              <button className="d" type="submit">Send</button>
            </form>
          </div>
        </main>
      </main>
    </>
  )
}

export default Services