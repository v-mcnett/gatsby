import React from 'react'
import Slider from 'react-slick'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        PBStrips: file(
          relativePath: { eq: "Cook-Wedding-Reception-0086.jpg" }
        ) {
          childImageSharp {
            fixed(height: 400, width: 205) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        PBEvents: file(relativePath: { eq: "IMG_4156.jpg" }) {
          childImageSharp {
            fixed(height: 518, width: 456) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        SliderOne: file(relativePath: { eq: "I-Do-Sodo-2018_0135-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 205) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        SliderTwo: file(relativePath: { eq: "I-Do-Sodo-2018_0203.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 205) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section
        id="crimson-rose-content-widget-collage-4"
        className="content-widget crimson-rose-content-widget-collage"
      >
        <div className="collage slider-control-light">
          <div className="slide carousel slide-5">
            <div className="slide-gutter">
              <div className="bx2-wrapper">
                <div className="bx2-viewport" aria-live="polite">
                  <div
                    className="carousel-container slide-overflow"
                    data-sliderauto="1"
                    data-slidermode="horizontal"
                    data-sliderpause="9"
                    data-sliderautohover="1"
                    data-slidercontrols="1"
                    data-sliderpager="1"
                  >
                    <div className="carousel-item bx2-clone" aria-hidden="true">
                      <div
                        data-slide-url="http://emeraldcityphotobooth.com/photos/index.php/reviews/"
                        className="slide-inner"
                      >
                        <div className="content-wrapper custom-color no-text-background-color" />

                        <a
                          className="div-link"
                          href="http://emeraldcityphotobooth.com/photos/index.php/reviews/"
                        >
                          <span className="screen-reader-text">
                            Continue Reading{' '}
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="carousel-item" aria-hidden="false">
                      <div
                        data-slide-url="http://emeraldcityphotobooth.com/photos/index.php/294-2/"
                        className="slide-inner"
                      >
                        <div className="content-wrapper custom-color text-background-color" />

                        <a
                          className="div-link"
                          href="http://emeraldcityphotobooth.com/photos/index.php/294-2/"
                        >
                          <span className="screen-reader-text">
                            Continue Reading{' '}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="carousel-item" aria-hidden="true">
                      <div
                        data-slide-url="http://emeraldcityphotobooth.com/photos/index.php/packages/"
                        className="slide-inner"
                      >
                        <div className="content-wrapper custom-color no-text-background-color" />

                        <a
                          className="div-link"
                          href="http://emeraldcityphotobooth.com/photos/index.php/packages/"
                        >
                          <span className="screen-reader-text">
                            Continue Reading{' '}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="carousel-item" aria-hidden="true">
                      <div
                        data-slide-url="http://emeraldcityphotobooth.com/photos/index.php/reviews/"
                        className="slide-inner"
                      >
                        <div className="content-wrapper custom-color no-text-background-color" />

                        <a
                          className="div-link"
                          href="http://emeraldcityphotobooth.com/photos/index.php/reviews/"
                        >
                          <span className="screen-reader-text">
                            Continue Reading{' '}
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="carousel-item bx2-clone" aria-hidden="true">
                      <div
                        data-slide-url="http://emeraldcityphotobooth.com/photos/index.php/294-2/"
                        className="slide-inner"
                      >
                        <div className="content-wrapper custom-color text-background-color" />

                        <a
                          className="div-link"
                          href="http://emeraldcityphotobooth.com/photos/index.php/294-2/"
                        >
                          <span className="screen-reader-text">
                            Continue Reading{' '}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bx2-controls bx2-has-controls-direction bx2-has-pager">
                  <div className="bx2-controls-direction">
                    <a className="bx2-prev" href="">
                      <i className="genericons-neue genericons-neue-expand genericons-neue-rotate-90" />
                    </a>
                    <a className="bx2-next" href="">
                      <i className="genericons-neue genericons-neue-expand genericons-neue-rotate-270" />
                    </a>
                  </div>
                  <div className="bx2-pager bx2-default-pager">
                    <div className="bx2-pager-item">
                      <a
                        href=""
                        data-slide-index="0"
                        className="bx2-pager-link active"
                      >
                        1
                      </a>
                    </div>
                    <div className="bx2-pager-item">
                      <a
                        href=""
                        data-slide-index="1"
                        className="bx2-pager-link"
                      >
                        2
                      </a>
                    </div>
                    <div className="bx2-pager-item">
                      <a
                        href=""
                        data-slide-index="2"
                        className="bx2-pager-link"
                      >
                        3
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slide-4">
            <div className="slide-gutter">
              <div className="slide-overflow">
                <div className="slide-inner">
                  <div className="content-wrapper no-custom-color text-background-color">
                    <Img fixed={data.PBEvents.childImageSharp.fixed} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slide-3">
            <div className="slide-gutter">
              <div className="slide-overflow">
                <div
                  data-slide-url="http://emeraldcityphotobooth.com/photos/index.php/about/"
                  className="slide-inner"
                >
                  <div className="content-wrapper no-custom-color no-text-background-color">
                    <div className="content-text">
                      <p>
                        Emerald City Photo Booth offers the most AMAZING photo
                        booths for any event!
                      </p>

                      <p>
                        We travel all over Washington state bringing our
                        innovative photo booths to weddings, anniversaries,
                        proms, graduations, corporate events, birthday parties
                        and more!
                      </p>
                    </div>
                  </div>

                  <a
                    className="div-link"
                    href="http://emeraldcityphotobooth.com/photos/index.php/about/"
                  >
                    <span className="screen-reader-text">
                      Continue Reading{' '}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slide-2">
            <div className="slide-gutter">
              <div className="slide-overflow">
                <div
                  data-slide-url="http://emeraldcityphotobooth.com/photos/"
                  className="slide-inner"
                >
                  <div className="content-wrapper no-custom-color no-text-background-color">
                    <div className="content-text" />
                  </div>

                  <a
                    className="div-link"
                    href="http://emeraldcityphotobooth.com/photos/"
                  >
                    <Img fixed={data.PBStrips.childImageSharp.fixed} />
                    <span className="screen-reader-text">
                      Continue Reading{' '}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slide-1">
            <div className="slide-gutter">
              <div className="slide-overflow">
                <div
                  data-slide-url="http://emeraldcityphotobooth.com/photos/"
                  className="slide-inner"
                >
                  <div className="content-wrapper no-custom-color text-background-color">
                    <div className="content-text">
                      <h2>All Inclusive Photo Booth Packages</h2>
                      <ul style={{ fontSize: 14 + 'px' }}>
                        <li style={{ marginBottom: 10 + 'px' }}>
                          includes delivery, set-up and removal
                        </li>
                        <li style={{ marginBottom: 10 + 'px' }}>
                          4 hours of unlimited photos
                        </li>
                        <li style={{ marginBottom: 10 + 'px' }}>
                          fast printing photo booths
                        </li>
                        <li style={{ marginBottom: 10 + 'px' }}>
                          single 4x6 or double 2x6 photo strips in color or
                          black &amp; white
                        </li>
                      </ul>
                    </div>
                  </div>

                  <a
                    className="div-link"
                    href="http://emeraldcityphotobooth.com/photos/"
                  >
                    <span className="screen-reader-text">
                      Continue Reading{' '}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)
