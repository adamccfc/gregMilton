import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <div className="hero__tag">Introducing</div>
      <h1 className="hero__headline">Greg Milton</h1>
      <p className="hero__content">A general builer who specialises in plastering and damp proofing. Based in Mountain Ash, Rhondda Cynon Taff, South Wales.</p>
    </div>

    <div className="grid-masonry">
      <div class="grid-item grid-item--border-none">
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <div className="grid-item span-2">
        <Card tag="Damp Proofing" headline="This is one headline"/>
      </div>
      <div className="grid-item">
        <Card tag="Stonework" headline="This is another"/>
      </div>
      <div className="grid-item">
        <Card tag="Fencing" headline="This is a third"/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
