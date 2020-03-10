import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        PBClassicBlack: file(relativePath: { eq: "Rebecca_Ellison_3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }


        PBStandupWhite: file(relativePath: { eq: "150217_1192_HARROLD.jpg" }) {
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
          className="gallery galleryid-6 gallery-columns-2 gallery-size-medium"
        >
          <figure className="gallery-item">
            <div className="booth-gallery-portrait">
            <Img fluid={data.PBClassicBlack.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-2-57"
            >
              Classic sit down booth in black or white
            </figcaption>
          </figure>
          
          <figure className="gallery-item">
            <div className="booth-gallery-portrait">
            <Img fluid={data.PBStandupWhite.childImageSharp.fluid} />
            </div>
            <figcaption
              className="wp-caption-text gallery-caption"
              id="gallery-2-55"
            >
              Modern stand up booth in black or white 
            </figcaption>
          </figure>
         
        </div>
      </section>
    )}
    />
  )
