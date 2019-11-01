import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class AllBackdrops extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <Page title="backdrops">
        <div id="content" className="site-content ecpb-site-boundary">
            <div id="primary" className="content-area">
		          <main id="main" className="site-main">
                <article id="post-584" className="post-584 page type-page status-publish has-post-thumbnail hentry">
	              <div className="entry-content"></div>
              <header className="entry-header"><h1 className="entry-title">Our Backdrops</h1></header>
              <div className="entry-content">
                <p>Emerald City Photo Booth has backdrops for every occasion. Choose from one of our backdrops or provide your own!</p>
                <div className="allBackdrops">
                {
                  this.props.data.allFile.edges.map((item, i) => {
                    console.log(i);
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
              </article>
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
        dir: {regex: "../src/pages/backdrops/"}},
      sort: {fields: [name], order: ASC}
    ) {
      edges {
        node {
          id
          name
          
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
          
        }
      }
    }
  }
`

export default withRoot(AllBackdrops)
