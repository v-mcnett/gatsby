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
                    <form
                      id="wpforms-form-292"
                      className="wpforms-validate wpforms-form"
                      name="booking-form"
                      method="post"
                      enctype="multipart/form-data"
                      action="/BookingFormSuccess/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      novalidate="novalidate"
                    >
                      <input type="hidden" name="bot-field" />
                      <div className="wpforms-field-container">
                        <div
                          id="wpforms-292-field_0-container"
                          className="wpforms-field wpforms-field-name"
                          data-field-id="0"
                        >
                          <label
                            className="wpforms-field-label"
                            for="wpforms-292-field_0"
                          >
                            Name{' '}
                            <span className="wpforms-required-label">*</span>
                          </label>
                          <div className="wpforms-field-row wpforms-field-medium">
                            <div className="wpforms-field-row-block wpforms-first wpforms-one-half">
                              <input
                                type="text"
                                id="wpforms-292-field_0"
                                className="wpforms-field-name-first wpforms-field-required"
                                name="wpforms[fields][0][first]"
                                required=""
                                aria-required="true"
                              />
                              <label
                                for="wpforms-292-field_0"
                                className="wpforms-field-sublabel after "
                              >
                                First
                              </label>
                            </div>
                            <div className="wpforms-field-row-block wpforms-one-half">
                              <input
                                type="text"
                                id="wpforms-292-field_0-last"
                                className="wpforms-field-name-last wpforms-field-required"
                                name="wpforms[fields][0][last]"
                                required=""
                                aria-required="true"
                              />
                              <label
                                for="wpforms-292-field_0-last"
                                className="wpforms-field-sublabel after "
                              >
                                Last
                              </label>
                            </div>
                          </div>
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
                            Email{' '}
                            <span className="wpforms-required-label">*</span>
                          </label>
                          <input
                            type="email"
                            id="wpforms-292-field_1"
                            className="wpforms-field-medium wpforms-field-required"
                            name="wpforms[fields][1]"
                            required=""
                            aria-required="true"
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
                            Phone Number
                          </label>
                          <input
                            type="number"
                            id="wpforms-292-field_3"
                            className="wpforms-field-small"
                            name="wpforms[fields][3]"
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
                            Event Type{' '}
                            <span className="wpforms-required-label">*</span>
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
                                aria-required="true"
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
                                aria-required="true"
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
                                aria-required="true"
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
                                aria-required="true"
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
                                aria-required="true"
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
                                aria-required="true"
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
                            Event Date{' '}
                            <span className="wpforms-required-label">*</span>
                          </label>
                          <input
                            type="text"
                            id="wpforms-292-field_10"
                            className="wpforms-field-medium wpforms-field-required"
                            name="wpforms[fields][10]"
                            required=""
                            aria-required="true"
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
                            Event Location
                          </label>

                          <input
                            type="text"
                            id="wpforms-292-field_5"
                            className="wpforms-field-medium"
                            name="wpforms[fields][5]"
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
                            <span className="wpforms-required-label">*</span>
                          </label>
                          <textarea
                            id="wpforms-292-field_2"
                            className="wpforms-field-medium wpforms-field-required"
                            name="wpforms[fields][2]"
                            required=""
                            aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="wpforms-field wpforms-field-hp">
                        <label
                          for="wpforms-field_hp"
                          className="wpforms-field-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="wpforms[hp]"
                          id="wpforms-field_hp"
                          className="wpforms-field-medium"
                        />
                      </div>
                      <div className="wpforms-submit-container">
                        <input type="hidden" name="wpforms[id]" value="292" />
                        <input type="hidden" name="wpforms[author]" value="1" />
                        <input
                          type="hidden"
                          name="wpforms[post_id]"
                          value="294"
                        />

                        <button
                          type="submit"
                          name="wpforms[submit]"
                          className="wpforms-submit "
                          id="wpforms-submit-292"
                          value="wpforms-submit"
                          data-alt-text="Sending..."
                        >
                          Submit
                        </button>
                      </div>
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
