import React from 'react'
import logo from "../img/cropped-ecpb-1.png"
import Img from "gatsby-image"


class Header extends React.Component {
  render() {
    return (
      <section>
        <div className="site-header-inner">
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
                      <a href="http://emeraldcityphotobooth.com/photos/index.php/294-2/">
                        Request a Quote
                      </a>
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
                      <a href="http://emeraldcityphotobooth.com/photos/index.php/contact/">
                        Call or Text
                      </a>
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
                <a
                  href="http://emeraldcityphotobooth.com/photos/"
                  className="custom-logo-link"
                  rel="home"
                  itemProp="url"
                >
                 <img src={logo} alt="Logo" />
                  
                </a>
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
    )
  }
}

export default Header
