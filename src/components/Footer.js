import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Hidden from '@material-ui/core/Hidden'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            company
            contact {
              email
            }
          }
        }
        WeddingWireImage: file(relativePath: { eq: "weddingwire.png" }) {
          childImageSharp {
            fixed(width: 97, height: 97) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        TheKnotHOFImage: file(relativePath: { eq: "theknot-bestof-hof.png" }) {
          childImageSharp {
            fixed(width: 97, height: 97) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        TheKnotImage: file(relativePath: { eq: "theknot-bestof-2019.png" }) {
          childImageSharp {
            fixed(width: 90, height: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      
    `}
    render={data => (
      <footer id="colophon" className="site-footer has-footer-widgets">
        <div className="site-boundary">
          <aside id="tertiary" className="footer-widget-area">
            <div className="footer-container">
              <div className="footer-column footer-column-1">
                <section
                  id="media_gallery-4"
                  className="widget widget_media_gallery"
                >
                  <div
                    id="gallery-3"
                    className="gallery galleryid-6 gallery-columns-3 gallery-size-thumbnail"
                  >
                    <figure className="gallery-item">
                      <div className="gallery-icon landscape">
                      <Img fixed={data.WeddingWireImage.childImageSharp.fixed} />
                      </div>
                    </figure>
                    <figure className="gallery-item">
                      <div className="gallery-icon landscape">
                      <Img fixed={data.TheKnotHOFImage.childImageSharp.fixed} />
                      </div>
                    </figure>
                    <figure className="gallery-item">
                      <div className="gallery-icon landscape">
                      <Img fixed={data.TheKnotImage.childImageSharp.fixed} />
                      </div>
                    </figure>
                  </div>
                </section>{' '}
              </div>

              <div className="footer-column footer-column-2">
                <section id="text-3" className="widget widget_text">
                  <h2 className="widget-title">Contact Us</h2>{' '}
                  <div className="textwidget">
                    <p />
                    <center>
                      <a href="tel:3603670329">360.367.0329</a>
                    </center>
                    <center>
                    <Link to="/ContactUs">
                        email
                      </Link>
                    </center>
                    <p />
                  </div>
                </section>{' '}
              </div>

              <div className="footer-column footer-column-3">
                <section
                  id="crimson-rose-social-menu-2"
                  className="widget crimson-rose-social-menu"
                >
                  <style type="text/css" />

                  <h2 className="widget-title">Connect</h2>
                  <div className="social-menu-wrapper social-menu-align-center">
                    <nav
                      className="social-navigation"
                      role="navigation"
                      aria-label="Footer Social Links Menu"
                    >
                      <ul
                        id="menu-social-links-menu-2"
                        className="menu social-links-menu"
                      >
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30">
                          <a
                        className="social-logo social-logo__pinterest"
                        href="https://www.pinterest.com/emeraldcitywed/"
                      >
                        <FontAwesomeIcon icon={['fab', 'pinterest']} />
                        <span className="screen-reader-text">Pinterest</span>
                      </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31">
                        <a
                        className="social-logo social-logo__facebook"
                        href="https://www.facebook.com/EmeraldCityPhotoBooth/"
                      >
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                        <span className="screen-reader-text">Facebook</span>
                      </a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                        <a
                        className="social-logo social-logo__twitter-alt"
                        href="https://twitter.com/EmeraldCityWed"
                      >
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                        <span className="screen-reader-text">Twitter</span>
                      </a>
                        </li>
                      </ul>{' '}
                    </nav>
                  </div>
                </section>{' '}
              </div>
            </div>
          </aside>
        </div>

        <div className="site-info-wrapper">
          <div className="site-boundary">
            <div className="site-info">
              <section
                id="custom_html-2"
                className="widget_text widget widget_custom_html"
              >
                <div className="textwidget custom-html-widget">
                  <center>
                  <Link to="/AboutUs">
                    About Us
                  </Link>{' '}
                    |{' '}
                    <Link to="/CancellationPolicy">
                      Cancellation Policy
                    </Link>{' '}
                    |{' '}
                    <Link to="/PrivacyPolicy">
                      Privacy Policy
                    </Link>
                    <br />
                    <br />
                    Serving Washington State, including Bellevue, Bonney Lake,
                    Everett, Issaquah, Kent, Kirkland, Lynnwood, Newcastle,
                    Maple Valley, Mercer Island, Redmond, Seattle, Snohomish,
                    Tacoma, Woodinville
                  </center>
                </div>
              </section>
            </div>
          </div>
          <div>
            <span style={{ fontSize: 0.8 + 'rem' }}>
              ©{new Date().getFullYear()} {data.site.siteMetadata.company}{' '}
              <Hidden only={['xs', 'sm']}>–</Hidden>
              <Hidden only={['xl', 'lg', 'md']}>
                <br />
              </Hidden>{' '}
              {data.site.siteMetadata.contact.email}
            </span>
          </div>
        </div>
      </footer>
    )}
  />
)
