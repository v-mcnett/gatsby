import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuExpanded: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isMenuExpanded: !prevState.isMenuExpanded
    }));
    
  }

  render() {
    return (
      <div id="site-navigation" className={this.state.isMenuExpanded ? 'main-navigation toggled': 'main-navigation '}>
        <div className="site-boundary">
          <button
            className="menu-toggle"
            aria-controls="primary-menu"
            aria-expanded={this.state.isMenuExpanded ? 'true': 'false'}
            onClick={this.handleClick}
          >
   
            <span className="menu-label">Menu</span>
            <FontAwesomeIcon icon="bars" />
          </button>

          <nav className="main-menu in-menu-bar">
            <div className="menu-primary-container">
              <ul
                id="primary-menu"
                className="menu nav-menu"
                aria-expanded={this.state.isMenuExpanded ? 'true': 'false'}
              >
                <li
                  id="menu-item-19"
                  className={this.props.title==='Emerald City Photo Booth' ? 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-19 current-menu-item current_page_item' : 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-19'}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  id="menu-item-105"
                 className={this.props.title==='Pricing' ? 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-105 current-menu-item current_page_item' : 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-105'}
                 >
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li
                  id="menu-item-51"
                  className={this.props.title==='Booths' ? 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-51 current-menu-item current_page_item' : 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-51'}
                >
                  <Link to="/booths">Booths</Link>
                </li>
                <li
                  id="menu-item-312"
                  className={this.props.title==='Customize' ? 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-312 current-menu-item current_page_item' : 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-312'}
                >
                  <Link to="/customize">Customize</Link>
                </li>
                <li
                  id="menu-item-168"
                  className={this.props.title==='Frequently Asked Questions' ? 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-168 current-menu-item current_page_item' : 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-168'}
                >
                  <Link to="/FAQs">FAQs</Link>
                </li>
                <li
                  id="menu-item-729"
                  className={this.props.title==='Contact Us' ? 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-729 current-menu-item current_page_item' : 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-729'}
                >
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li
                  id="menu-item-729"
                  className={this.props.title==='About Us' ? 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-729 current-menu-item current_page_item' : 'menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-729'}
                >
                  <Link to="/about-us">About Us</Link>
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
