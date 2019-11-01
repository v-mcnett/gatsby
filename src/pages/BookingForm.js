import React from 'react'
import Page from '../components/Page'
import { navigateTo } from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      <Page title="Thank You">
      <div id="content" className="site-content ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <h1>Book a Booth <FontAwesomeIcon icon={['fas', 'calendar']} /></h1>
                <div className="wpforms-container wpforms-container-full">
                <form
                  name="contact"
                  method="post"
                  action="/BookingFormSuccess/"
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

                  <div className="wpforms-field-container">
                    <p>It's easy to book your booth! Just tell us about your Northwest event and we will respond within 24 hours. Or give us a call at <a href="tel:+13603670329">360-367-0329</a>.</p>
                    <div
                      id="wpforms-292-field_0-container"
                      className="wpforms-field wpforms-field-name"
                      data-field-id="0"
                    >
                        <label
                            for="wpforms-292-field_0"
                            className="wpforms-field-label after "
                          >
                            Name <span className="wpforms-required-label">* {" "}</span>
                          </label>
                          <input
                            type="text"
                            id="wpforms-292-field_0"
                            className="wpforms-field-name-first wpforms-field-required wpforms-field-medium"
                            name="wpforms[fields][0][first]"
                            required=""
                            aria-required="true"
                            onChange={this.handleChange}
                            size="40"
                            maxLength="128"
                            required
                          />
                          
                    </div>

                    <div
                      id="wpforms-292-field_1-container"
                      className="wpforms-field wpforms-field-email"
                      data-field-id="1"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_1"
                      >
                        Email <span className="wpforms-required-label">* {" "}</span>
                      </label>
                      <input
                        type="email"
                        id="wpforms-292-field_1"
                        className="wpforms-field-medium wpforms-field-required"
                        name="wpforms[fields][1]"
                        required=""
                        aria-required="true"
                        onChange={this.handleChange}
                        size="40"
                        maxLength="128"
                        required
                      />
                    </div>

                    <div
                      id="wpforms-292-field_3-container"
                      className="wpforms-field wpforms-field-number"
                      data-field-id="3"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_3"
                      >
                        Phone Number {" "}<span className="wpforms-required-label">*</span>
                      </label>
                      <input
                        type="tel"
                        id="wpforms-292-field_3"
                        className="wpforms-field-small"
                        name="wpforms[fields][3]"
                        size="40"
                        maxLength="128"
                        required
                      />
                    </div>

                    <div
                      id="wpforms-292-field_4-container"
                      className="wpforms-field wpforms-field-radio wpforms-list-2-columns"
                      data-field-id="4"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_4"
                      >
                        Event Type                        
                      </label>
                      <ul
                        id="wpforms-292-field_4"
                        className="wpforms-field-required"
                      >
                        <li className="choice-1 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_4_1"
                            name="wpforms[fields][4]"
                            value="Wedding"
                            required=""
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_4_1"
                          >
                            Wedding
                          </label>
                        </li>
                        <li className="choice-2 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_4_2"
                            name="wpforms[fields][4]"
                            value="Corporate Event"
                            required=""
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_4_2"
                          >
                            Corporate Event
                          </label>
                        </li>
                        <li className="choice-3 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_4_3"
                            name="wpforms[fields][4]"
                            value="Bar or Bat Mitzvah"
                            required=""
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_4_3"
                          >
                            Bar or Bat Mitzvah
                          </label>
                        </li>
                        <li className="choice-4 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_4_4"
                            name="wpforms[fields][4]"
                            value="School Event"
                            required=""
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_4_4"
                          >
                            School Event
                          </label>
                        </li>
                        <li className="choice-5 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_4_5"
                            name="wpforms[fields][4]"
                            value="Fundraiser "
                            required=""
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_4_5"
                          >
                            Fundraiser{' '}
                          </label>
                        </li>
                        <li className="choice-6 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_4_6"
                            name="wpforms[fields][4]"
                            value="Birthday or Anniversary Party"
                            required=""
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_4_6"
                          >
                            Birthday or Anniversary Party
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div
                      id="wpforms-292-field_10-container"
                      className="wpforms-field wpforms-field-text"
                      data-field-id="10"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_10"
                      >
                        Event Date
                      </label>
                      <input
                        type="text"
                        id="wpforms-292-field_10"
                        className="wpforms-field-medium wpforms-field-required"
                        name="wpforms[fields][10]"
                        required=""
                        aria-required="true"
                        onChange={this.handleChange}
                      />
                    </div>

                    <div
                      id="wpforms-292-field_5-container"
                      className="wpforms-field wpforms-field-text"
                      data-field-id="5"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_5"
                      >
                        Event Location {" "}
                      </label>

                      <input
                        type="text"
                        id="wpforms-292-field_5"
                        className="wpforms-field-medium"
                        name="wpforms[fields][5]"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div
                      id="wpforms-292-field_9-container"
                      className="wpforms-field wpforms-field-radio wpforms-list-2-columns"
                      data-field-id="9"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_9"
                      >
                        # of Guests
                      </label>
                      <ul id="wpforms-292-field_9">
                        <li className="choice-1 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_9_1"
                            name="wpforms[fields][9]"
                            value="Under 150"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_9_1"
                          >
                            Under 150
                          </label>
                        </li>
                        <li className="choice-2 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_9_2"
                            name="wpforms[fields][9]"
                            value="150 to 300"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_9_2"
                          >
                            150 to 300
                          </label>
                        </li>
                        <li className="choice-3 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_9_3"
                            name="wpforms[fields][9]"
                            value="Over 300"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_9_3"
                          >
                            Over 300
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div
                      id="wpforms-292-field_7-container"
                      className="wpforms-field wpforms-field-radio wpforms-list-2-columns"
                      data-field-id="7"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_7"
                      >
                        Type of Booth
                      </label>
                      <ul id="wpforms-292-field_7">
                        <li className="choice-1 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_7_1"
                            name="wpforms[fields][7]"
                            value="Party Booth"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_7_1"
                          >
                            Party Booth
                          </label>
                        </li>
                        <li className="choice-2 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_7_2"
                            name="wpforms[fields][7]"
                            value="Classic Booth"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_7_2"
                          >
                            Classic Booth
                          </label>
                        </li>
                        <li className="choice-3 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_7_3"
                            name="wpforms[fields][7]"
                            value="Undecided"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_7_3"
                          >
                            Undecided
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div
                      id="wpforms-292-field_8-container"
                      className="wpforms-field wpforms-field-radio wpforms-list-2-columns"
                      data-field-id="8"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_8"
                      >
                        Referred By
                      </label>
                      <ul id="wpforms-292-field_8">
                        <li className="choice-1 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_8_1"
                            name="wpforms[fields][8]"
                            value="Facebook"
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_8_1"
                          >
                            Facebook
                          </label>
                        </li>
                        <li className="choice-2 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_8_2"
                            name="wpforms[fields][8]"
                            value="Friend/Family"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_8_2"
                          >
                            Friend/Family
                          </label>
                        </li>
                        <li className="choice-3 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_8_3"
                            name="wpforms[fields][8]"
                            value="Google Print Ad"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_8_3"
                          >
                            Google Print Ad
                          </label>
                        </li>
                        <li className="choice-4 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_8_4"
                            name="wpforms[fields][8]"
                            value="TheKnot.com"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_8_4"
                          >
                            TheKnot.com
                          </label>
                        </li>
                        <li className="choice-5 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_8_5"
                            name="wpforms[fields][8]"
                            value="Wedding Show"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_8_5"
                          >
                            Wedding Show
                          </label>
                        </li>
                        <li className="choice-6 depth-1">
                          <input
                            type="radio"
                            id="wpforms-292-field_8_6"
                            name="wpforms[fields][8]"
                            value="Other"
                            onChange={this.handleChange}
                          />
                          <label
                            className="wpforms-field-label-inline"
                            for="wpforms-292-field_8_6"
                          >
                            Other
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div
                      id="wpforms-292-field_2-container"
                      className="wpforms-field wpforms-field-textarea"
                      data-field-id="2"
                    >
                      <label
                        className="wpforms-field-label"
                        for="wpforms-292-field_2"
                      >
                        Comment or Message{' '}
                        <span className="wpforms-required-label">* {" "}</span>
                      </label>
                      <textarea
                        id="wpforms-292-field_2"
                        className="wpforms-field-medium wpforms-field-required"
                        name="wpforms[fields][2]"
                        required=""
                        aria-required="true"
                        onChange={this.handleChange}
                        cols="40" rows="10"
                      />
                    </div>
                  </div>

                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
