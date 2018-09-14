import React from 'react'

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 footer__divider">
          <h5 className="footer__title">Contact Me</h5>
          <a className="footer__link" href="tel:0144347223">01443 47223</a>
          <a className="footer__link" href="tel:07711686833">07711 686833</a>
          <a className="footer__link" href="mailto:greghmilton@hotmail.co.uk?Subject=Hello%Greg">greghmilton@hotmail.co.uk</a>
        </div>
        <div className="col-12">
          <p>Designed and developed by <a href="http:www.adammorgan.wales" target="_blank" rel="noopener noreferrer">Adam Morgan</a>.</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
