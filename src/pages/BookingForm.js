import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Page from '../components/Page'
import Typography from '@material-ui/core/Typography'
import withRoot from '../utils/withRoot'

class BookingForm extends React.Component {
  render() {
    return (
      <Page title="Packages">
        <div className="site-boundary">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              <article
                id="post-294"
                className="post-294 page type-page status-publish has-post-thumbnail hentry"
              >
                <header className="entry-header">
                  <h1 className="entry-title">Book a booth</h1>
                </header>

                <div className="entry-content">
                  <div
                    className="wpforms-container wpforms-container-full"
                    id="wpforms-292"
                  >
                    <form name="contact" method="POST" data-netlify="true">
                      <p>
                        <label>
                          Your Name: <input type="text" name="name" />
                        </label>
                      </p>
                      <p>
                        <label>
                          Your Email: <input type="email" name="email" />
                        </label>
                      </p>
                      <p>
                        <label>
                          Your Role:{' '}
                          <select name="role[]" multiple>
                            <option value="leader">Leader</option>
                            <option value="follower">Follower</option>
                          </select>
                        </label>
                      </p>
                      <p>
                        <label>
                          Message: <textarea name="message" />
                        </label>
                      </p>
                      <p>
                        <button type="submit">Send</button>
                      </p>
                    </form>
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
export default withRoot(BookingForm)
