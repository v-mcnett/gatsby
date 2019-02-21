import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id="site-navigation" class="main-navigation">
        <div class="site-boundary">
          <button
            class="menu-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span class="menu-label">Menu</span>
            <i class="genericons-neue" />
          </button>

          <nav class="main-menu in-menu-bar">
            <div class="menu-primary-container">
              <ul id="primary-menu" class="menu nav-menu" aria-expanded="false">
                <li
                  id="menu-item-19"
                  class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-19"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/">Home</a>
                </li>
                <li
                  id="menu-item-105"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-105"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/packages/">
                    Pricing
                  </a>
                </li>
                <li
                  id="menu-item-51"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-51"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/booths/">
                    Booths
                  </a>
                </li>
                <li
                  id="menu-item-312"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-312"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/personalization-options/">
                    Customize
                  </a>
                </li>
                <li
                  id="menu-item-168"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-168"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/faq/">
                    FAQs
                  </a>
                </li>
                <li
                  id="menu-item-729"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-729"
                >
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/about-us/">
                    About Us
                  </a>
                </li>
              </ul>
            </div>{' '}
          </nav>

          <div class="top-mobile-header">
            <nav
              id="top-left-navigation"
              class="top-left-header-menu header-menu"
              role="navigation"
            >
              <ul id="top-left-menu" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-29">
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/contact/">
                    Call or Text
                  </a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-307">
                  <a href="tel:+13603670329">360-367-0329</a>
                </li>
              </ul>{' '}
            </nav>

            <nav
              id="top-right-navigation"
              class="top-right-header-menu header-menu"
              role="navigation"
            >
              <ul id="top-right-menu" class="menu">
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-727">
                  <a href="http://emeraldcityphotobooth.com/photos/index.php/294-2/">
                    Request a Quote
                  </a>
                </li>
              </ul>{' '}
            </nav>

            <nav
              class="social-navigation"
              role="navigation"
              aria-label="Footer Social Links Menu"
            >
              <ul id="menu-social-links-menu-1" class="menu social-links-menu">
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-30">
                  <a
                    class="social-logo social-logo__pinterest"
                    href="https://www.pinterest.com/emeraldcitywed/"
                  >
                    <span class="screen-reader-text">Pinterest</span>
                  </a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31">
                  <a
                    class="social-logo social-logo__facebook"
                    href="https://www.facebook.com/EmeraldCityPhotoBooth/"
                  >
                    <span class="screen-reader-text">Facebook</span>
                  </a>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32">
                  <a
                    class="social-logo social-logo__twitter-alt"
                    href="https://twitter.com/EmeraldCityWed"
                  >
                    <span class="screen-reader-text">Twitter</span>
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
