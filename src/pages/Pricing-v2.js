import React from 'react'
import { Link } from 'gatsby'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Pricing extends React.Component {
  render() {

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
                  <div className="pricingv2__wrapper">
                    <div className="pricingv2__box silver"><h3 style={{color:"#aaa9ad"}}>SILVER <FontAwesomeIcon icon={['fas', 'star']} /></h3>
                    <div className="pricingv2__bullet">Unlimited Pictures for 4 Hours</div>
                    <div className="pricingv2__bullet">The Prop Box</div>
                    <div className="pricingv2__bullet">Set-up and Removal Included</div>
                    <div className="pricingv2__bullet">Professional and Entertaining Attendant</div>
                    <div className="pricingv2__bullet">Private Online Photo Gallery</div>
                    <div className="pricingv2__bullet">Personalized Photo Strips</div>
                    <div className="pricingv2__bullet">Double Photo Strips in Black & White or Color</div>
                    <div className="pricingv2__bullet">Customized Photo Booth Music</div>
                    <div className="pricingv2__bullet">USB with All Photos</div>
                  </div>
                  
                  <div className="pricingv2__box gold"><h3  style={{color:"#d4af37"}}>GOLD <FontAwesomeIcon icon={['fas', 'star']} /></h3>
                    <div className="pricingv2__bullet">Unlimited Pictures for 4 Hours</div>
                    <div className="pricingv2__bullet">The Prop Box</div>
                    <div className="pricingv2__bullet">Set-up and Removal Included</div>
                    <div className="pricingv2__bullet">Professional and Entertaining Attendant</div>
                    <div className="pricingv2__bullet">Private Online Photo Gallery</div>
                    <div className="pricingv2__bullet">Personalized Photo Strips</div>
                    <div className="pricingv2__bullet">Double Photo Strips in Black & White or Color</div>
                    <div className="pricingv2__bullet">Customized Photo Booth Music</div>
                    <div className="pricingv2__bullet">USB with All Photos</div>
                    <div className="pricingv2__bullet">Customized Guest Book</div>
                    <div className="pricingv2__bullet">2nd Attendant</div>

                  </div>
                  <div className="pricingv2__box platinum"><h3 style={{color:"#e5e4e2"}}>PLATINUM <FontAwesomeIcon  icon={['fas', 'star']} /></h3>
                    <div className="pricingv2__bullet">Unlimited Pictures for 4 Hours</div>
                    <div className="pricingv2__bullet">The Prop Box</div>
                    <div className="pricingv2__bullet">Set-up and Removal Included</div>
                    <div className="pricingv2__bullet">Professional and Entertaining Attendant</div>
                    <div className="pricingv2__bullet">Private Online Photo Gallery</div>
                    <div className="pricingv2__bullet">Personalized Photo Strips</div>
                    <div className="pricingv2__bullet">Double Photo Strips in Black & White or Color</div>
                    <div className="pricingv2__bullet">Customized Photo Booth Music</div>
                    <div className="pricingv2__bullet">USB with All Photos</div>
                    <div className="pricingv2__bullet">Customized Guest Book</div>
                    <div className="pricingv2__bullet">2nd Attendant</div>
                    <div className="pricingv2__bullet">Extra Set of Double Strips</div>
                    <div className="pricingv2__bullet">Guest Option to Leave 30 Seconds of Video</div>
                    <div className="pricingv2__bullet">Guest Option to Print Their Favorite Picture in 4x6</div>
                    <div className="pricingv2__bullet">USB Drive of all Photos and Video</div>

                  </div>

                  <div className="pricingv2__box">
                    <div className="pricingv2__bookNow"><Link to="/BookingForm">Book Now ></Link></div>
                  </div>

                  <div className="pricingv2__box">
                    <div className="pricingv2__bookNow"><Link to="/BookingForm">Book Now ></Link></div>
                  </div>

                  <div className="pricingv2__box">
                    <div className="pricingv2__bookNow"><Link to="/BookingForm">Book Now ></Link></div>
                  </div>

                  </div>

                  <p style={{textAlign: "center", fontStyle: "italic", marginTop: "10px"}}>
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
