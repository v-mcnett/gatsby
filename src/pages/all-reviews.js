import React from 'react'
import { graphql } from 'gatsby'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class AllReviews extends React.Component {
  
  render() {
    return (
      <Page title="Reviews">
        <div id="content" className="site-content ecpb-site-boundary">
            <div id="primary" className="content-area">
		          <main id="main" className="site-main">
                <div className="entry-content">
                <h1>Read Our Reviews</h1>
                  {
                    this.props.data.Reviews.edges.map((item, i) => {
                      //Check for missing images
                      return (
                        <div key={i.toString()}>
                        <p dangerouslySetInnerHTML={{ __html: item.node.html }}></p>
                        <p><strong>- {item.node.frontmatter.title}</strong></p>
                        </div>
                      )
                    }) 
                  }
                  <p>Read more reviews on <a href="https://www.theknot.com/marketplace/emerald-city-photo-booth-llc-washington-state-wa-366747#navReviews" target="_blank" rel="noopener noreferrer">The Knot</a>, <a href="https://www.weddingwire.com/biz/emerald-city-photo-booth-seattle/963bf402922db20c.html" target="_blank" rel="noopener noreferrer">WeddingWire</a> and <a href="https://www.yelp.com/biz/emerald-city-photo-booth-seattle" target="_blank" rel="noopener noreferrer">Yelp</a>.</p>
              </div>
            </main>
          </div>
		    </div>
      </Page>
    )
  }
}

export const reviewQuery = graphql`
  query Reviews {
    Reviews: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/reviews/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
    
  }
`

export default withRoot(AllReviews)
