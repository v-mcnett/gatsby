import React from 'react'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class FAQs extends React.Component {
  render() {
    return (
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
                    <h2>Photo Booth</h2>
                    <p>
                      With Emerald City Photo Booth, you can choose between a
                      classic sit down style booth or a modern party style
                      booth.
                    </p>
                    <h2>Photo Strips</h2>
                    <p>
                      Our booth can print double 2×6″ strips or one custom 4×6″
                      layout. You can also choose black and white or color or
                      let your guests choose. You can also add a custom designed
                      logo, either with your event name and date or business
                      logo.
                    </p>
                    <h2>Backdrops</h2>
                    <p>
                      We have a variety of backdrops to choose from, providing
                      style and class to your event.
                    </p>
                    <h2>Props</h2>
                    <p>
                      We have glamorous tiaras and boas, goofy hats, silly
                      sunglasses and so much more – there is something for
                      everyone to enjoy! Best of all, the Prop Box is included
                      with every Emerald City Photo Booth package.
                    </p>
                    <p>
                      We take requests, so if there is something you want, let
                      us know, we may be able to get it for your event.
                    </p>
                    <h2>Guestbooks</h2>
                    <p className="mTop0">
                      When you purchase the Gold or Platinum package, we will
                      help your guests construct this one-of-a-kind keepsake.
                      Your guests will enter the photo booth wearing some of our
                      crazy, fun or glamorous props, they will make goofy faces
                      and have a blast. Just eight seconds after they finish, 2
                      photostrips will print out. Your guests will keep one to
                      take home and the other will go into the guestbook. Best
                      of all, this is all done at your event, so at the end of
                      the night, you can take your guestbook home.
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
