import React, { Component } from 'react'
import Slider from 'react-slick'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

const homepageSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  initialSlide: 0,
}

class HomepageSlider extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data } = this.props // add more props here as needed

    return (
      <section
        id="crimson-rose-content-widget-collage-4"
        className="content-widget crimson-rose-content-widget-collage"
      >
        <div className="collage slider-control-light">
          <div className="slide carousel slide-5">
            <div className="slide-gutter">
              <div className="bx2-wrapper">
                <div className="bx2-viewport" aria-live="polite">
                  <Slider {...homepageSliderSettings}>
                    <div>
                      <Img fluid={data.SliderOne.childImageSharp.fluid} />
                    </div>
                    <div>
                      <Img fluid={data.SliderTwo.childImageSharp.fluid} />
                    </div>
                    <div>
                      <Img fluid={data.SliderThree.childImageSharp.fluid} />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slide-4">
            <div className="slide-gutter">
              <div className="slide-overflow">
                <Img fixed={data.PBEvents.childImageSharp.fixed} />
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
                      <ul style={{ fontSize: 14 + 'px', textAlign: 'left'}}>
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        PBStrips: file(
          relativePath: { eq: "Cook-Wedding-Reception-0086.jpg" }
        ) {
          childImageSharp {
            fixed(height: 410, width: 265) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        PBEvents: file(relativePath: { eq: "IMG_4156.jpg" }) {
          childImageSharp {
            fixed(height: 280, width: 560) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        SliderOne: file(relativePath: { eq: "I-Do-Sodo-2018_0135-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        SliderTwo: file(relativePath: { eq: "I-Do-Sodo-2018_0203.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        SliderThree: file(relativePath: { eq: "IMG_2615.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HomepageSlider data={data} {...props} />}
  />
)
