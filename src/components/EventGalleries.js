import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import TextLoop from "react-text-loop"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        EventsWeddings: file(
          relativePath: { eq: "Smith-429.jpg" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        EventsCorporate: file(
          relativePath: { eq: "20131219210957_P0-e1546152595825.jpg" }
        ) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        EventsMitzvahs: file(
          relativePath: { eq: "PhiandJasonWedding-150.jpg" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        EventsBirthdays: file(
          relativePath: { eq: "Cook-Wedding-Reception-0079.jpg" }
        ) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section
        id="media_gallery-5"
        className="content-widget widget_media_gallery"
      >
        <h2 className="widget-title content-widget-title">WE BRING THE {" "}
          <TextLoop>
            <span>FUN</span>
            <span>MEMORIES</span>
            <span>LAUGHTER</span>
            </TextLoop></h2>
        <div
          id="gallery-1"
          className="gallery galleryid-6 gallery-columns-4 gallery-size-large"
        >
          <figure className="gallery-item">
            <div className="gallery-icon landscape">
              <Img fluid={data.EventsWeddings.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-1-569"
            >
              Weddings, Anniversaries
            </figcaption>
          </figure>

          <figure className="gallery-item">
            <div className="gallery-icon landscape">
              <Img fluid={data.EventsCorporate.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-1-442"
            >
              Corporate Events, Holiday Parties
            </figcaption>
          </figure>

          <figure className="gallery-item">
            <div className="gallery-icon landscape">
              <Img fluid={data.EventsMitzvahs.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-1-564"
            >
              Bar and Bat Mitzvahs, Sweet 16s, Quinceaneras
            </figcaption>
          </figure>

          <figure className="gallery-item">
            <div className="gallery-icon landscape">
              <Img fluid={data.EventsBirthdays.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-1-537"
            >
              Birthdays, Family Reunions
            </figcaption>
          </figure>
        </div>
      </section>
    )}
  />
)
