import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="row">
        <div class="col-12">
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card__tag">Stonework</div>
            <h3 className="card__headline">This is where the headline goes</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
