import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'

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
          <Card tag="Damp Proofing" headline="This is one headline"/>
        </div>
        <div className="col-3">
          <Card tag="Stonework" headline="This is another"/>
        </div>
        <div className="col-3">
          <Card tag="Fencing" headline="This is a third"/>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
