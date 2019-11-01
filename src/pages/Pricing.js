import React from 'react'
import { Link } from 'gatsby'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Pricing extends React.Component {
  render() {
    let styles = {
      paddingLeft: '10px', 
      paddingRight: '10px'
    };

    return (
      <Page title="Pricing">
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

                <div class="entry-content">
                  <p>
                    We have 3 simple all inclusive packages to choose from, but
                    we will gladly work with you to find a package to suit you.
                    Packages include set-up and delivery!
                  </p>
                  <table
                    id="package_table"
                    cellSpacing="0"
                    cellPadding="0"
                    border="0"
                    style={styles}
                  >
                    <tbody>
                      <tr>
                        <th>&nbsp;</th>
                        <th style={styles}>Silver {"  "}</th>
                        <th style={styles}>Gold {"  "}</th>
                        <th style={styles}>Platinum {"  "}</th>
                      </tr>
                      <tr>
                        <td class="description">
                          Unlimited Pictures for 4 Hours
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                          
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          The Prop Box
                          <br />
                          Includes goofy hats, silly sunglasses, fun boas and
                          more!
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">Set-up and Removal Included</td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          Professional and Entertaining Attendant
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          Private Online Photo Gallery
                        </td>
                        <td  style={styles}>
                          <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                          <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          Personalized Photo Strips
                          <br />
                          Couple’s names and wedding date
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          Double Photo Strips in Black &amp; White or Color
                        </td>
                        <td valign="top" style={styles}>
                          <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td valign="top" style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td valign="top" style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          Customized Photo Booth Music
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} /> 
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">USB with All Photos</td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">Customized Guest Book</td>
                        <td />
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          2nd Attendant
                          <br />
                          To help guests with your scrapbook
                        </td>
                        <td />
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">Extra Set of Double Strips</td>
                        <td />
                        <td />
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          Guest Option to Leave 30 Seconds of Video
                        </td>
                        <td />
                        <td />
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          Guest Option to Print Their Favorite Picture in 4×6
                        </td>
                        <td />
                        <td />
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                      <tr>
                        <td class="description">
                          USB Drive of all Photos and Video
                        </td>
                        <td />
                        <td />
                        <td  style={styles}>
                        <FontAwesomeIcon icon={['fas', 'check']} />
                        </td>
                      </tr>
                    </tbody>
                  </table><br/><br/>
                  <p>
                    Call us for pricing at{' '}
                    <a href="tel:+13603670329">360-367-0329</a>.
                  </p>
                  <h2>Silver Deluxe Package</h2>
                  <p>
                    The Silver Package is a great way to set your wedding apart
                    from every other wedding your guests will attend this year.
                    The photo booth will be available for{' '}
                    <strong>unlimited use for 4 hours</strong>, including an
                    attendant to serve your guests and the{' '}
                    <strong>Prop Box</strong>. The Prop Box is sure to bring out
                    the wild side in you and your guests crazy hats, goofy
                    glasses and so much more. Photo strips can be customized
                    with the bride and groom’s name, and wedding date, which
                    make the perfect wedding favor!
                  </p>
                  <h2>Gold Deluxe Package</h2>
                  <p>
                    The Gold Package includes everything the Silver Package
                    does, in addition to a copyright free CD of all photos from
                    the event. It also includes the creation of a{' '}
                    <strong>one-of-a-kind guest book</strong>. We provide the
                    tools, including the guest book, scissors, glue and a second
                    attendant that will help your guests use their second photo
                    strip to create this unique keepsake.
                  </p>
                  <h2>Platinum Deluxe Package</h2>
                  <p>
                    With everything listed above, plus <strong>video</strong>,
                    the Platinum Package is the ultimate in wedding fun! Your
                    guests will get an option for an extra strip of{' '}
                    <strong>double photo strips</strong>, which is wonderful for
                    large groups. Guests also have the option to print one 4×6
                    of their favorite photo. You will get the guest book, as in
                    the Gold Package. But your guests will also get to leave you
                    30 seconds of video after they take their pictures. You will
                    leave the event with a USB compiled with all the photos and
                    all the video footage.
                  </p>
                  <p>
                    Call us for pricing at{' '}
                    <a href="tel:+13603670329">360-367-0329</a>.
                  </p>
                  <p>
                    <strong>
                      Reserve your date, non refundable deposit of $295, applies
                      to purchase.{' '}
                      <Link to="/BookingForm">
                        Book yours now!
                      </Link>
                    </strong>
                  </p>

                  <p />
                </div>
              </article>
            </main>
          </div>
        </div>
      </Page>
    )
  }
}
export default withRoot(Pricing)
