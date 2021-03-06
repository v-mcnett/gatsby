import React from 'react'
import {  graphql } from 'gatsby'
import Img from 'gatsby-image'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class AllBackdrops extends React.Component {
  
  render() {

    return (
      <Page title="backdrops">
        <div id="content" className="site-content ecpb-site-boundary">
            <div id="primary" className="content-area">
		          <main id="main" className="site-main">
	              <div className="entry-content"></div>
              <h1>Backdrops</h1>
              <div className="entry-content">
                <p>Emerald City Photo Booth has backdrops for every occasion. Choose from one of our backdrops or provide your own!</p>
                <div className="allBackdrops">
                {
                  this.props.data.allFile.edges.map((item, i) => {

                    //Check for missing images
                    return (
                      
                      <div className="backdrop" key={i.toString()}>
                      <Img fluid={item.node.childImageSharp.fluid} />
                      </div>
                    )
                  }) 
                }
                </div>
              </div>
            </main>
	          
          </div>
		    </div>
      </Page>
    )
  }
}

export const reviewQuery = graphql`
  query backdropPhotos {
    allFile(
      filter: {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
        dir: {regex: "../src/pages/backdrop-images/"}},
      sort: {fields: [name], order: ASC}
    ) {
      edges {
        node {
          id
          name
          
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          
        }
      }
    }
  }
`

export default withRoot(AllBackdrops)
