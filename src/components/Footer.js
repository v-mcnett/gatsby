import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

const Footer = props => {
  const {
    company,
    contact: { email },
  } = props.data.site.siteMetadata
  return ( 
    <footer id="colophon" className="site-footer has-footer-widgets">
      <div className="site-boundary">
        <aside id="tertiary" className="footer-widget-area">
          <div className="footer-container">
            <div className="footer-column footer-column-1">
              <section id="media_gallery-4" className="widget widget_media_gallery">
                <div
                  id="gallery-3"
                  className="gallery galleryid-6 gallery-columns-3 gallery-size-thumbnail"
                >
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <a href="http://emeraldcityphotobooth.com/photos/weddingwire/">
                        <img
                          width="97"
                          height="97"
                          src="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/08/weddingwire.png?zoom=2&amp;resize=97%2C97"
                          className="attachment-thumbnail size-thumbnail"
                          alt="wedding wire couples' choice awards 2018"
                          srcSet="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/08/weddingwire.png?zoom=2&amp;resize=97%2C97"
                          src-orig="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/08/weddingwire.png?resize=124%2C124"
                          scale="2"
                        />
                      </a>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <a href="http://emeraldcityphotobooth.com/photos/theknot-bestof/">
                        <img
                          width="150"
                          height="150"
                          src="https://i1.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/08/theknot-bestof.png?resize=150%2C150"
                          className="attachment-thumbnail size-thumbnail"
                          alt="the knot best of weddings: hall of fame"
                          srcSet="https://i1.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/08/theknot-bestof.png?w=180 180w, https://i1.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/08/theknot-bestof.png?resize=150%2C150 150w"
                          sizes="(max-width: 150px) 100vw, 150px"
                        />
                      </a>
                    </div>
                  </figure>
                  <figure className="gallery-item">
                    <div className="gallery-icon landscape">
                      <a href="http://emeraldcityphotobooth.com/photos/5233554c-7b21-40f0-8da3-c18d867032a6rs_90-90-fit/">
                        <img
                          width="90"
                          height="90"
                          src="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2019/01/5233554c-7b21-40f0-8da3-c18d867032a6rs_90.90.fit_.png?zoom=2&amp;resize=90%2C90"
                          className="attachment-thumbnail size-thumbnail"
                          alt="2019 pick: the knot best of weddings"
                          srcSet="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2019/01/5233554c-7b21-40f0-8da3-c18d867032a6rs_90.90.fit_.png?zoom=2&amp;resize=90%2C90"
                          src-orig="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2019/01/5233554c-7b21-40f0-8da3-c18d867032a6rs_90.90.fit_.png?resize=90%2C90"
                          scale="2"
                        />
                      </a>
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
                    <a href="http://emeraldcityphotobooth.com/photos/index.php/contact/">
                      email
                    </a>
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
                  <a title="" href="/about-us">
                    About Us
                  </a>{' '}
                  |{' '}
                  <a title="" href="/cancellation-policy">
                    Cancellation Policy
                  </a>{' '}
                  |{' '}
                  <a title="" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  <br />
                  <br />
                  Serving Washington State, including Bellevue, Bonney Lake,
                  Everett, Issaquah, Kent, Kirkland, Lynnwood, Newcastle, Maple
                  Valley, Mercer Island, Redmond, Seattle, Snohomish, Tacoma,
                  Woodinville
                </center>
              </div>
            </section>
          </div>
        </div>
        <div>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {company}{' '}
            <Hidden only={['xs', 'sm']}>–</Hidden>
            <Hidden only={['xl', 'lg', 'md']}>
              <br />
            </Hidden>{' '}
            {email}
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default props => (
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
      }
    `}
    render={data => <Footer data={data} />}
  />
)
