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
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Guestbook: file(relativePath: { eq: "candids_scrapbook_v3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Props: file(relativePath: { eq: "idosodo_propbox.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Photostrips: file(relativePath: { eq: "communitychristmas4x6.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Backdrop: file(relativePath: { eq: "customize-backdrop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    
  `}

  render={data => (
      <Page title="Customize">
        <div id="content" className="site-content ecpb-site-boundary">
          <div id="primary" className="content-area">
		          <main id="main" className="site-main">
                
                  <h1>Customize</h1>

                  <div className="entry-content">                  
                    <p>
                      We offer a wide range of options to customize your photo
                      booth experience for your event.
                    </p>
                    <div className="customizations">
                      <div className="customization">
                        <div className="customization__col1">
                        
                          <div className="customization__title"><FontAwesomeIcon icon={['fas', 'camera-retro']}/></div>
                            <h2>Photo Booth</h2>
                            <p>
                              Choose between a
                              classic sit down style booth or a modern party style
                              booth, in black or white.
                            </p>
                            <p>The <strong>classic photo booth</strong> is the quintessential design; groups of four or less enter the booth, sit down, close the curtain and follow the easy-to-use, onscreen instructions to start the festivities! The classic photo booth is elegant and perfect for a timeless, exclusive evening.</p>
                            <p>The <strong>party photo booth</strong> is a modern twist on the classic photo booth. It is deal for large groups, the booth is set up using an existing wall as a backdrop, which allows more people to crowd around the camera, for maximum fun and entertainment. The party booth is not for the shy and timid, with no curtain to hide behind, it's open for all to watch and enjoy!</p>
                       </div>
                        <div className="customization__col2">
                          <Img fluid={data.ClassicBlackBooth.childImageSharp.fluid} />
                        </div>
                        
                      </div>
                      <div className="customization">
                        <div className="customization__col1">
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
                        <div className="customization__col2">
                          <Img fluid={data.Photostrips.childImageSharp.fluid} />
                        </div>
                      </div>
                      <div className="customization">
                        <div className="customization__col1">
                          <div className="customization__title"><FontAwesomeIcon icon={['fas', 'chalkboard-teacher']}/></div>
                          <h2>Backdrops</h2>
                          <p>
                            Choose from a variety of backdrops, providing
                            style and class to your event.
                          </p>
                        </div>
                        <div className="customization__col2">
                          <Img fluid={data.Backdrop.childImageSharp.fluid} />
                          </div>
                      </div>
                      <div className="customization">
                        <div className="customization__col1">
                          <div className="customization__title"><FontAwesomeIcon icon={['fa', 'mask']} /></div>
                          <h2>Props</h2>
                          <p>
                            Every Emerald City Photo Booth package includes a selection of 
                            glamorous tiaras and boas, goofy hats, silly
                            sunglasses and so much more – there is something for
                            everyone to enjoy! 
                          </p>
                        </div>
                        <div className="customization__col2">
                          <Img fluid={data.Props.childImageSharp.fluid} />
                        </div>
                      </div>
                      <div className="customization">
                        <div className="customization__col1">
                          <div className="customization__title"><FontAwesomeIcon icon={['fa', 'book-open']} /></div>
                          <h2>Guestbooks</h2>
                          <p className="mTop0">
                            Exclusive to the Gold or Platinum package, is a one-of-a-kind keepsake.
                            The booth will print out double photo strips: one for your guest to take home
                            and one will go into the guestbook. Best
                            of all, this is all done at your event, so at the end of
                            the night, you can take your guestbook home.
                          </p>
                        </div>
                        <div className="customization__col2">
                          <Img fluid={data.Guestbook.childImageSharp.fluid} />
                        </div>
                      </div>
                    </div>
                  </div>

              </main>
          </div>
        </div>
      </Page>
   )}
   />
 )
