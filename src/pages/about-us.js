import React from 'react'
import Page from '../components/Page'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

export default () => (
<StaticQuery
  query={graphql`
    query {
      AboutUs: file(relativePath: { eq: "aboutus.jpg" }) {
        childImageSharp {
          fluid{
           ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
     
    }
    
  `}

  render={data => (
      <Page title="About Us">
        <div id="content" className="site-content ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-7"
                  className="post-7 page type-page status-publish has-post-thumbnail hentry"
                >
                  <h1 className="entry-title">About Us</h1>{' '}

                    <div className="aboutus__img">
                      <Img fluid={data.AboutUs.childImageSharp.fluid} />
                    </div>
                    
                    <div className="intro"><p>
                      We are a family owned company founded in 2010. We travel throughout
                      Washington including: Bellevue, Bonney Lake, Bothell, Everett, Issaquah, Kent, Kirkland, Lynnwood, Newcastle, Maple Valley, Mercer Island, Renton, Redmond, Seattle, Snohomish, Tacoma, Woodinville and everywhere in between
                      bringing you fun and exciting photo booths. Some of our
                      favorite places include:
                    </p>

                    <div className="aboutus__columns">
                      <div className="aboutus__column">
                          <a
                            href="https://www.marysvillewa.gov/762/Opera-House"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Marysville Opera House
                          </a>
                          <br />
                          <a
                            href="http://unionstationrotunda.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Tacoma Union Station
                          </a>
                          <br />
                          <a
                            href="https://www.lakewildernessgc.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Lake Wilderness
                          </a>
                      </div>
                      <div className="aboutus__column">
                          <a
                            href="https://www.cedarbrooklodge.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Cedarbrook Lodge
                          </a>
                          <br />
                          <a
                            href="http://www.edgewaterhotel.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            The Edgewater Hotel
                          </a>
                          <br />
                          <a href="http://www.mtsprings.com/" target="_blank" rel="noopener noreferrer">
                            Mountain Springs
                          </a>
                      </div>
                    </div>
                    </div>


                  

                  <div className="entry-content">
                    

                    <h4>Photo booths are perfect for any event, such as:</h4>

                    <ul>
                      <li>Birthday Parties, Sweet 16s, Quinceañeras</li>
                      <li>Corporate Events, Retirement Parties</li>
                      <li>
                        Valentine’s Day, Mardi Gras, St. Patrick’s Day, Fourth
                        of July, Oktoberfest, Halloween, Christmas, New Year’s
                        Eve
                      </li>
                      <li>Bar / Bat Mitzvahs</li>
                      <li>Prom Night, Graduation, College Event, Reunion</li>
                      <li>Fundraisers</li>
                      <li>Wedding, Vow Renewal, Anniversary</li>
                      <li>
                        Theme Parties, such as – Hollywood theme party, luau,
                        fiesta, sports theme party, rock and roll party
                      </li>
                    </ul>

                    <p>
                      If you are interested in photo booths in the Maryland area
                      please see{' '}
                      <a href="http://www.photoboothmd.com" target="_blank" rel="noopener noreferrer">
                        http://www.photoboothmd.com
                      </a>
                      . Or if you are interested in owning a photo booth see{' '}
                      <a href="http://www.kingdomphotobooth.com" target="_blank" rel="noopener noreferrer">
                        http://www.kingdomphotobooth.com
                      </a>
                      .
                    </p>
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
