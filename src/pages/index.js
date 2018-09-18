import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Card from '../components/card'

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="hero__tag">Introducing</div>
      <h1 className="hero__headline">Greg Milton</h1>
      <p className="hero__content">A general builer who specialises in plastering and damp proofing. Based in Mountain Ash, Rhondda Cynon Taff, South Wales.</p>
    </div>

    <section className="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="service">
              <div className="service__image service__image--damp-proofing"></div>
              <div className="service__tag">Damp Proofing</div>
              <h3 className="service__title">Eliminate damp problems in the home</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--plastering"></div>
              <div className="service__tag">Plastering</div>
              <h3 className="service__title">Internal plastering that leaves an impeccable finish</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--extensions"></div>
              <div className="service__tag">Extensions</div>
              <h3 className="service__title">Complete renovation, new build or an extension?</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--roofing"></div>
              <div className="service__tag">Roofing</div>
              <h3 className="service__title">Small repairs to complete renovations</h3>
            </div>
          </div>
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--landscaping"></div>
              <div className="service__tag">Landscaping</div>
              <h3 className="service__title">Garden design, paving and driveways</h3>
            </div>
          </div>
          <div className="col-6">
            <div className="service">
              <div className="service__image service__image--stonework"></div>
              <div className="service__tag">Stonework</div>
              <h3 className="service__title">Stonework construction, restoration and repair</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
