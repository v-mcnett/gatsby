import React from 'react'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class FAQs extends React.Component {
  render() {
    return (
      <Page title="Frequently Asked Questions">
        <div id="content" className="site-content  ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-48"
                  className="post-48 page type-page status-publish has-post-thumbnail hentry"
                >
                  <header className="entry-header">
                    <h1 className="entry-title">Booths</h1>{' '}
                  </header>

                  <div className="entry-content">
                    <div className="wp-block-image">
                      <figure className="alignright">
                        <img
                          src="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/07/photobooth.jpg?w=660"
                          alt=""
                          className="wp-image-52"
                          srcset="https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/07/photobooth.jpg?w=247 247w, https://i2.wp.com/emeraldcityphotobooth.com/photos/wp-content/uploads/2018/07/photobooth.jpg?resize=205%2C300 205w"
                          sizes="(max-width: 247px) 100vw, 247px"
                          width="247"
                          height="361"
                        />
                      </figure>
                    </div>

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

                    <ul>
                      <li>
                        The&nbsp;<strong>classic photo booth</strong>&nbsp;is
                        the quintessential design; groups of four or less enter
                        the booth, sit down, close the curtain and follow the
                        easy-to-use, onscreen instructions to start the
                        festivities! The classic photo booth is elegant and
                        perfect for a timeless, exclusive evening.
                      </li>
                      <li>
                        The&nbsp;<strong>party photo booth</strong>&nbsp;is a
                        modern twist on the classic photo booth. It is deal for
                        large groups, the booth is set up using an existing wall
                        as a backdrop, which allows more people to crowd around
                        the camera, for maximum fun and entertainment. The party
                        booth is not for the shy and timid, with no curtain to
                        hide behind, it’s open for all to watch and enjoy!
                      </li>
                    </ul>

                    <p>
                      The classic and party photo booths come in either the
                      gorgeous StaryNight™ body or the Elegant White Dream body.
                      Both styles fit in perfectly at any venue – the StaryNight
                      booth is like the little black dress, it’s always in
                      style, and the Elegant White Dream is the perfect booth
                      for an upscale party, or for making a statement. Best of
                      all, the booths are portable, at 48″ inches long, 30″
                      inches wide and 76″ inches tall, they can be taken
                      anywhere, including upstairs.
                    </p>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}
export default withRoot(FAQs)
