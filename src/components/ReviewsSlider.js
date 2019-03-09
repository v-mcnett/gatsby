import React, { Component } from 'react'
import Slider from 'react-slick'

export default class ReviewsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
          className="content-jetpack-testimonial box-style-plain" style={{marginBottom: '80px'}}
        >
          <div className="site-boundary">
            <h2 className="widget-title content-widget-title">
              CUSTOMERS SAY IT BEST
            </h2>
            <Slider {...settings}>
              <div>
                <div className="testimonial-entry-content-wrapper no-testimonial-image">
                  <div className="testimonial-entry-content">
                    Emerald City Photobooth went above and beyond for our
                    wedding. We could not have been any happier with them and
                    would strongly recommend them to anyone considering a photo
                    booth at their event. The photobooth was easy to use, and
                    set-up, and produced high quality professional photos. Our
                    wedding guests loved the costumes and themes that were
                    provided, and the on-site attendant was extremely polite and
                    helpful throughout the night. She helped our guests pick out
                    costumes and assisted them […]
                  </div>
                  <div className="testimonial-entry-signature">
                    <i className="genericons-neue genericons-neue-heart" />
                    <span className="testimonial-signature">Erin, Seattle WA</span>
                  </div>
                </div>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}
