import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Page from '../components/Page'
import Typography from '@material-ui/core/Typography'
import withRoot from '../utils/withRoot'

class BookingFormSuccess extends React.Component {
  render() {
    return (
      <Page title="Thank YOu">
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Success/Thank You Page</h1>
                    </header>
                   
                    <p>Thank you for contacting us!</p>
                </div>
            </section>
        </div>
      </Page>
    )
  }
}
export default withRoot(BookingFormSuccess)
