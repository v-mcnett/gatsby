import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <FontAwesomeIcon icon="bars" />
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




            
          </div>
        </div>
    )
  }
}

export default Header
