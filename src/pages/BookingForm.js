import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Page from '../components/Page'
import Typography from '@material-ui/core/Typography'
import withRoot from '../utils/withRoot'

class BookingForm extends React.Component {
  render() {
    return (
      <form
        name="contact_interop19"
        method="post"
        action="/BookingFormSuccess/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
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
    )
  }
}
export default BookingForm
