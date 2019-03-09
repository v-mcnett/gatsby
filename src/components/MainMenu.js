import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id="site-navigation" className="main-navigation">
        <div className="site-boundary">
          <button
            className="menu-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span className="menu-label">Menu</span>
            <i className="genericons-neue" />
          </button>

          <nav className="main-menu in-menu-bar">
            <div className="menu-primary-container">
              <ul id="primary-menu" className="menu nav-menu" aria-expanded="false">
                <li
                  id="menu-item-19"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-19"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/">Home</a>
                </li>
                <li
                  id="menu-item-105"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-105"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/packages/">
                    Pricing
                  </a>
                </li>
                <li
                  id="menu-item-51"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/booths/">
                    Booths
                  </a>
                </li>
                <li
                  id="menu-item-312"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-312"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/personalization-options/">
                    Customize
                  </a>
                </li>
                <li
                  id="menu-item-168"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-168"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/faq/">
                    FAQs
                  </a>
                </li>
                <li
                  id="menu-item-729"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-729"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/about-us/">
                    About Us
                  </a>
                </li>
              </ul>
            </div>{' '}
          </nav>

          <div className="top-mobile-header">
            <nav
              id="top-left-navigation"
              className="top-left-header-menu header-menu"
              role="navigation"
            >
              <ul id="top-left-menu" className="menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29">
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/contact/">
                    Call or Text
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-307">
                  <a href="tel:+13603670329">360-367-0329</a>
                </li>
              </ul>{' '}
            </nav>

            <nav
              id="top-right-navigation"
              className="top-right-header-menu header-menu"
              role="navigation"
            >
              <ul id="top-right-menu" className="menu">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-727">
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/294-2/">
                    Request a Quote
                  </a>
                </li>
              </ul>{' '}
            </nav>

            <nav
              className="social-navigation"
              role="navigation"
              aria-label="Footer Social Links Menu"
            >
              <ul id="menu-social-links-menu-1" className="menu social-links-menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30">
                  <a
                    className="social-logo social-logo__pinterest"
                    href="https://www.pinterest.com/emeraldcitywed/"
                  >
                    <span className="screen-reader-text">Pinterest</span>
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31">
                  <a
                    className="social-logo social-logo__facebook"
                    href="https://www.facebook.com/EmeraldCityPhotoBooth/"
                  >
                    <span className="screen-reader-text">Facebook</span>
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                  <a
                    className="social-logo social-logo__twitter-alt"
                    href="https://twitter.com/EmeraldCityWed"
                  >
                    <span className="screen-reader-text">Twitter</span>
                  </a>
                </li>
              </ul>{' '}
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
