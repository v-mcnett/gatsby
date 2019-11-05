import React from 'react'
import Page from '../components/Page'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        PBClassicWhite: file(relativePath: { eq: "photobooth-classic-white.jpg" }) {
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
      <Page title="Booths">
        <div id="content" className="site-content  ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-48"
                  className="post-48 page type-page status-publish has-post-thumbnail hentry"
                >
                  <h1 className="entry-title">Booths</h1>{' '}

                  <div className="entry-content">                     
                      <div className="booth__information">
                        <p>
                          Emerald City Photo Booth uses The Fastest Photo Booth on
                          Planet Earth™! That’s not just a slogan, it’s a
                          mathematical fact. Our booth prints and cuts double copies
                          of your photo strips in only&nbsp;
                          <strong>8 seconds</strong>&nbsp;which means we can get
                          almost 250 groups of people through the booth in a four
                          hour party. Nothing else even comes close.
                        </p>

                        <p>
                          We offer two types of booths to suit your event, the
                          classic photo booth and the party photo booth:
                        </p>

                        <div className="booths">
                          <div className="booth__details">
                            <h2>Classic Photo Booth</h2>
                            <Img fluid={data.PBClassicWhite.childImageSharp.fluid} />
                            <p>The&nbsp;<strong>classic photo booth</strong>&nbsp;is
                            the quintessential design; groups of four or less enter
                            the booth, sit down, close the curtain and follow the
                            easy-to-use, onscreen instructions to start the
                            festivities! The classic photo booth is elegant and
                            perfect for a timeless, exclusive evening.</p>
                            <p>Available the
                            gorgeous in StaryNight™ body or the Elegant White Dream. Both styles fit in perfectly at any venue – the StaryNight
                            booth is like the little black dress, it’s always in
                            style, and the Elegant White Dream is the perfect booth
                            for an upscale party, or for making a statement.</p>

                          </div>

                          <div className="booth__details">
                            <h2>Party Photo Booth</h2>
                            <Img fluid={data.PBStandupWhite.childImageSharp.fluid} />
                            <p>The&nbsp;<strong>party photo booth</strong>&nbsp;is a
                            modern twist on the classic photo booth. It is deal for
                            large groups, the booth is set up using an existing wall
                            as a backdrop, which allows more people to crowd around
                            the camera, for maximum fun and entertainment. The party
                            booth is not for the shy and timid, with no curtain to
                            hide behind, it’s open for all to watch and enjoy!</p>
                            <p>Available the
                            gorgeous in StaryNight™ body or the Elegant White Dream. Both styles fit in perfectly at any venue – the StaryNight
                            booth is like the little black dress, it’s always in
                            style, and the Elegant White Dream is the perfect booth
                            for an upscale party, or for making a statement.</p>

                          </div>
                        </div>

                        <p>
                           Best of
                          all, the booths are portable, at 48″ inches long, 30″
                          inches wide and 76″ inches tall, they can be taken
                          anywhere, including upstairs.
                        </p>
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
