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
                <article id="post-584" className="post-584 page type-page status-publish has-post-thumbnail hentry">
	              <div className="entry-content"></div>
              <header className="entry-header"><h1 className="entry-title">Read Our Reviews</h1></header>
              <div className="entry-content">
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
              </article>
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
