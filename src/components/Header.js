import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BackgroundImage from '../img/top-right-header-bg.png'

export default () => (
  <StaticQuery
    query={graphql`
      query HeaderImage {
        file(relativePath: { eq: "ECPBLogo.png" }) {
          childImageSharp {
            fixed(width: 400, height: 164) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <section>
        <div className="site-header-inner" style={{ backgroundImage: `url(${BackgroundImage})` }}>
          <div className="top-header">
            <div className="site-boundary">
              <div className="top-left-header">
                <nav
                  id="top-left-navigation"
                  className="top-left-header-menu header-menu"
                  role="navigation"
                >
                  <ul id="top-left-menu" className="menu">
                    <li
                      id="menu-item-727"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-727"
                    >
                      <Link to="/BookingForm">Request a Quote</Link>
                    </li>
                  </ul>{' '}
                </nav>
              </div>
              <div className="top-right-header">
                <nav
                  className="social-navigation"
                  role="navigation"
                  aria-label="Footer Social Links Menu"
                >
                  <ul
                    id="menu-social-links-menu"
                    className="menu social-links-menu"
                  >
                    <li
                      id="menu-item-30"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30"
                    >
                    
                      <a
                        className="social-logo social-logo__pinterest"
                        href="https://www.pinterest.com/emeraldcitywed/"
                      >
                        <FontAwesomeIcon icon={['fab', 'pinterest']} />
                        <span className="screen-reader-text">Pinterest</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-31"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"
                    >
                    
                      <a
                        className="social-logo social-logo__facebook"
                        href="https://www.facebook.com/EmeraldCityPhotoBooth/"
                      >
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                        <span className="screen-reader-text">Facebook</span>
                      </a>
                    </li>
                    <li
                      id="menu-item-32"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"
                    >
                    
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

                <nav
                  id="top-right-navigation"
                  className="top-right-header-menu header-menu"
                  role="navigation"
                >
                  <ul id="top-right-menu" className="menu">
                    <li
                      id="menu-item-29"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"
                    >
                      <Link to="/ContactUs">
                        Call or Text
                      </Link>
                    </li>
                    <li
                      id="menu-item-307"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-307"
                    >
                      <a href="tel:+13603670329">360-367-0329</a>
                    </li>
                  </ul>{' '}
                </nav>
              </div>
            </div>
          </div>

          <div className="site-branding">
            <div className="site-boundary">
              <div className="site-logo">
              <Link to="/">
                  <Img fixed={data.file.childImageSharp.fixed} />
                </Link>
              </div>

              <p className="site-title">
                <a href="http://emeraldcityphotobooth.com/photos/" rel="home">
                  Emerald City Photo Booth
                </a>
              </p>

              <p className="site-description">friends, photos, fun</p>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)
