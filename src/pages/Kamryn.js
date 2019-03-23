import React from 'react'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class FAQs extends React.Component {
  render() {
    return (
      <Page title="Frequently Asked Questions">
        <div id="content" className="site-content  ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-48"
                  className="post-48 page type-page status-publish has-post-thumbnail hentry"
                >
                  <header className="entry-header">
                    <h1 className="entry-title">Hi Kamryn</h1>{' '}
                  </header>
<p>Hi kami, i love you so much. This is a web page. </p>
                     </article>
              </main>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
export default withRoot(FAQs)
