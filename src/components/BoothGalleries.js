import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        PBClassicBlack: file(relativePath: { eq: "photobooth-classic-black.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        PBStandupBlack: file(relativePath: { eq: "photobooth-classic-black2.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        PBClassicWhite: file(relativePath: { eq: "photobooth-classic-white.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        PBStandupWhite: file(relativePath: { eq: "photobooth-classic-white2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      
    `}
    render={data => (
      <section id="media_gallery-7" className="content-widget widget_media_gallery">
        <h2 className="widget-title content-widget-title">
          WE OFFER A VARIETY OF BOOTHS
        </h2>
        <div
          id="gallery-2"
          className="gallery galleryid-6 gallery-columns-4 gallery-size-medium"
        >
          <figure className="gallery-item">
            <div className="gallery-icon portrait">
            <Img fluid={data.PBClassicBlack.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-2-57"
            >
              Classic sit down booth in black
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-icon portrait">
            <Img fluid={data.PBClassicWhite.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-2-56"
            >
              Classic sit down booth in white
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-icon portrait">
            <Img fluid={data.PBStandupWhite.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-2-55"
            >
              Modern stand up booth in white
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <div className="gallery-icon portrait">
            <Img fluid={data.PBStandupBlack.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-2-52"
            >
              Modern stand up booth in black
            </figcaption>
          </figure>
        </div>
      </section>
    )}
    />
  )
