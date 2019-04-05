import React from 'react'
import Page from '../components/Page'
import { navigateTo } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Page title="Contact Us">
        <div id="content" className="site-content ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <h1>Contact Us</h1>
                <div class="wp-block-column">
                  <p>We love hearing from our customers!</p>
                  <h3>By Phone</h3>
                  <p>
                    Call <a href="tel:3603670329">(360) 367-0329</a> anytime.
                  </p>
                  <h3>By Email</h3>
                  <p>
                    To send questions or comments, please use the form below.
                  </p>
                </div>
                <div className="wpforms-container wpforms-container-full">
                <form
                  name="contact"
                  method="post"
                  action="/ContactUsSuccess/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                  className="wpforms-validate wpforms-form"
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </p>
                  <p>
                    <label>
                      Your name:
                      <br />
                      <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        size="40"
                        maxLength="128"
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Your email:
                      <br />
                      <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        size="40"
                        maxLength="128"
                      />
                    </label>
                  </p>
                  <p>
                    <label>
                      Message:
                      <br />
                      <textarea
                        name="message"
                        onChange={this.handleChange}
                        cols="40"
                        rows="10"
                      />
                    </label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
              </div></main>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
