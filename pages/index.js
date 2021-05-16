import Head from 'next/head'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero>
        <h1>More than an ordinary coffee.</h1>
        <br />
        <button className="btn my-4">Learn More</button>
      </Hero>
      <div>
        <section className="showcase grid-3 text-center">
          <div className="desc">
            <img src="/img/illustration/cup.svg" alt />
            <h3>Delicious Coffee</h3>
            <p>Our coffee are served with love by an experienced bartenders</p>
          </div>
          <div className="desc">
            <img src="/img/illustration/award.svg" alt />
            <h3>Award Winning</h3>
            <p>Our coffee has won multiple awards</p>
          </div>
          <div className="desc">
            <img src="/img/illustration/shopping-bag.svg" alt />
            <h3>Affordable</h3>
            <p>Our coffee is affordable</p>
          </div>
        </section>
        {/* Locations */}
        <section className="locations">
          <h1 className="text-center py-3">Where to Find Us (these are a dummy location)</h1>
          <div className="card location-list ">
            <div className="list">
              <div className="place">
                <h3 className="place-name">Central Plaza Koffee Khayalaan</h3>
                <p className="place-phone">(262) 728-4394</p>
                <p className="place-address-road">1414 S Shore Dr</p>
                <p className="place-address-town">Delavan, Wisconsin(WI), 53115</p>
              </div>
              <div className="place">
                <h3 className="place-name">West Wing Koffee Khayalaan</h3>
                <p className="place-phone">(262) 728-4394</p>
                <p className="place-address-road">1414 S Shore Dr</p>
                <p className="place-address-town">Delavan, Wisconsin(WI), 53115</p>
              </div>
              <div className="place">
                <h3 className="place-name">North Park Koffee Khayalaan</h3>
                <p className="place-phone">(262) 728-4394</p>
                <p className="place-address-road">1414 S Shore Dr</p>
                <p className="place-address-town">Delavan, Wisconsin(WI), 53115</p>
              </div>
              <div className="place">
                <h3 className="place-name">Metro Station Koffee Khayalaan</h3>
                <p className="place-phone">(262) 728-4394</p>
                <p className="place-address-road">1414 S Shore Dr</p>
                <p className="place-address-town">Delavan, Wisconsin(WI), 53115</p>
              </div>
              <div className="place">
                <h3 className="place-name">NorthCity Mall Koffee Khayalaan</h3>
                <p className="place-phone">(262) 728-4394</p>
                <p className="place-address-road">1414 S Shore Dr</p>
                <p className="place-address-town">Delavan, Wisconsin(WI), 53115</p>
              </div>
              <div className="place">
                <h3 className="place-name">NorthCity Mall Koffee Khayalaan</h3>
                <p className="place-phone">(262) 728-4394</p>
                <p className="place-address-road">1414 S Shore Dr</p>
                <p className="place-address-town">Delavan, Wisconsin(WI), 53115</p>
              </div>
              <div className="place">
                <h3 className="place-name">NorthCity Mall Koffee Khayalaan</h3>
                <p className="place-phone">(262) 728-4394</p>
                <p className="place-address-road">1414 S Shore Dr</p>
                <p className="place-address-town">Delavan, Wisconsin(WI), 53115</p>
              </div>
            </div>
            <div className="google-maps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101626.90159913155!2d-115.87404780005669!3d37.25148746867984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80b81baaba3e8c81%3A0x970427e38e6237ae!2sArea%2051%2C%20NV%2C%20USA!5e0!3m2!1sen!2sid!4v1620635453878!5m2!1sen!2sid" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
