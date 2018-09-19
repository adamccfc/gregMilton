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
              <h3 className="service__tag">Damp Proofing</h3>
              <p className="service__title">Eliminate damp problems in the home</p>
            </div>
          </div>
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--plastering"></div>
              <h3 className="service__tag">Plastering</h3>
              <p className="service__title">Internal plastering that leaves an impeccable finish</p>
            </div>
          </div>
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--extensions"></div>
              <h3 className="service__tag">Extensions</h3>
              <p className="service__title">Complete renovation, new build or an extension?</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--roofing"></div>
              <h3 className="service__tag">Roofing</h3>
              <p className="service__title">Small repairs to complete renovations</p>
            </div>
          </div>
          <div className="col-3">
            <div className="service">
              <div className="service__image service__image--landscaping"></div>
              <h3 className="service__tag">Landscaping</h3>
              <p className="service__title">Garden design, paving and driveways</p>
            </div>
          </div>
          <div className="col-6">
            <div className="service">
              <div className="service__image service__image--stonework"></div>
              <h3 className="service__tag">Stonework</h3>
              <p className="service__title">Stonework construction, restoration and repair</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
)

export default IndexPage
