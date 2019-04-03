import React from 'react'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class Pricing extends React.Component {
  render() {
    return (
      <Page title="PRicing">
      <div id="content" className="site-content ecpb-site-boundary">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
            <article
              id="post-10"
              className="post-10 page type-page status-publish has-post-thumbnail hentry"
            >
              <header className="entry-header">
                <h1 className="entry-title">Pricing</h1>
              </header>

              <div className="entry-content">
              </div>
              </article>
          </main>
        </div></div>
      </Page>
    )
  }
}
export default withRoot(Pricing)
