import React from 'react'
import Page from '../components/Page'
import { StaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
  query={graphql`
    query {
      ClassicBlackBooth: file(relativePath: { eq: "IMG_4134.jpg" }) {
        childImageSharp {
          fluid(maxWidth:205) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Guestbook: file(relativePath: { eq: "guestbook_4503.jpg" }) {
        childImageSharp {
          fluid(maxWidth:205) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Props: file(relativePath: { eq: "20110604200303_P0_0.jpg" }) {
        childImageSharp {
          fluid(maxWidth:205) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PBStandupWhite: file(relativePath: { eq: "photobooth-classic-white2.jpg" }) {
        childImageSharp {
          fluid(maxWidth:205) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    
  `}

  render={data => (
      <Page title="Customize">
        <div id="content" className="site-content ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-309"
                  className="post-309 page type-page status-publish has-post-thumbnail hentry"
                >
                  <h1 className="entry-title">Customize</h1>{' '}

                  <div className="entry-content">                  
                    <p>
                      We offer a wide range of options to customize your photo
                      booth experience for your event.
                    </p>
                    <div className="customizations">
                      <div className="customization">
                        <div className="customization__title"><FontAwesomeIcon icon={['fas', 'camera-retro']}/></div>
                        <h2> Photo Booth</h2>
                        <p>
                          Choose between a
                          classic sit down style booth or a modern party style
                          booth, in black or white.
                        </p>
                        <Img fluid={data.ClassicBlackBooth.childImageSharp.fluid} />
                      </div>
                      <div className="customization">
                        <div className="customization__title"><FontAwesomeIcon icon={['fas', 'image']}/></div>
                        <h2>Photo Strips</h2>
                        <p>
                          Print double 2×6″ strips or one custom 4×6″
                          layout.<br/> Choose black and white or color or
                          let your guests choose.<br/> Add a custom designed
                          logo, either with your event name and date or business
                          logo.
                        </p>
                      </div>
                      <div className="customization">
                        <div className="customization__title"><FontAwesomeIcon icon={['fas', 'chalkboard-teacher']}/></div>
                        <h2>Backdrops</h2>
                        <p>
                          Choose from a variety of backdrops, providing
                          style and class to your event.
                        </p>
                      </div>
                      <div className="customization">
                        <div className="customization__title"><FontAwesomeIcon icon={['fa', 'mask']} /></div>
                        <h2>Props</h2>
                        <p>
                          Every Emerald City Photo Booth package includes a selection of 
                          glamorous tiaras and boas, goofy hats, silly
                          sunglasses and so much more – there is something for
                          everyone to enjoy! 
                        </p>
                        <Img fluid={data.Props.childImageSharp.fluid} />
                      </div>
                      <div className="customization">
                        <div className="customization__title"><FontAwesomeIcon icon={['fa', 'book-open']} /></div>
                        <h2>Guestbooks</h2>
                        <p className="mTop0">
                          Exclusive to the Gold or Platinum package, is a one-of-a-kind keepsake.
                          The booth will print out double photo strips: one for your guest to take home
                          and one will go into the guestbook. Best
                          of all, this is all done at your event, so at the end of
                          the night, you can take your guestbook home.
                        </p>
                        <Img fluid={data.Guestbook.childImageSharp.fluid} />
                      </div>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </Page>
   )}
   />
 )
