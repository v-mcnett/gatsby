import React, { Component } from 'react'
import Slider from 'react-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ReviewsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      swipeToSlide: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <section
        id="crimson-rose-content-widget-jetpack-testimonials-2"
        className="content-widget full-width-bar crimson-rose-content-widget-jetpack-testimonials"
      >
        <div
          className="content-jetpack-testimonial box-style-plain"
          style={{ marginBottom: '80px' }}
        >
          <div className="site-boundary">
            <h2 className="widget-title content-widget-title">
              CUSTOMERS SAY IT BEST <FontAwesomeIcon icon={['fas', 'comment']} />
            </h2>
            <Slider {...settings}>
              {this.props.posts.map((item, i) => {
                return (
                  <div className="review-slider-wrapper" key={i.toString()}>
                    <div className="review-slider">
                      <div>
                        <div className="testimonial-entry-content-wrapper no-testimonial-image">
                          <div
                            className="testimonial-entry-content"
                            dangerouslySetInnerHTML={{ __html: item.node.html }}
                          />
                        </div>
                      </div>
                      <div className="testimonial-entry-signature">
                        <FontAwesomeIcon icon="heart" />
                        <span className="testimonial-signature">
                          {' '}{item.node.frontmatter.title}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}
