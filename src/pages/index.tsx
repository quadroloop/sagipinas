import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import axios from 'axios'

const IndexPage = () => {

  const [data, setData] = useState<any>([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res.data.results)
        setData(res.data.results)
      })
  }, [])

  return (<Layout>
    <SEO title="SagiPinas" />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `700px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>I wonder how to edit this is wierd and we don't know how it really works</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

    <ul>
      {data && (
        data.map((item, index) => {
          return (
            <li key={index}>{item.name}</li>
          )
        })
      )}
    </ul>
  </Layout>
  )

}

export default IndexPage
