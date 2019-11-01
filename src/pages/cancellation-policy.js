import React from 'react'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class CancellationPolicy extends React.Component {
  render() {
    return (
      <Page title="Cancellation Policy">
        <div id="content" className="site-content  ecpb-site-boundary">
          <div className="site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <article
                  id="post-48"
                  className="post-48 page type-page status-publish has-post-thumbnail hentry"
                >
                  <h1 className="entry-title">Cancellation Policy</h1>

                  <div className="entry-content">
                    <p>
                      Emerald City Photo Booth wants every customer to have an
                      amazing time with a photo booth at their event. However,
                      we do understand that life throws wrenches into the best
                      laid plans. That is why we want you to know our
                      cancellation policy, so that you can be as prepared as
                      humanly possible for those wrenches that get tossed your
                      way.
                    </p>
                    <p>
                      Emerald City Photo Booth will refund any amount you have
                      paid back to you less the deposit to secure your date;
                      when notification is given 30 days prior to your event. If
                      for whatever the circumstance you cancel 30 days or less
                      before the scheduled date of your event, then we will not
                      be able to offer a refund of any amount. Emerald City
                      Photo Booth requires a deposit to secure your date, and
                      this prevents us from booking any other potential events
                      for that day. Emerald City Photo Booth needs at least 30
                      days to market and to find a replacement for your date if
                      you were to cancel.
                    </p>
                    <p>
                      We thank you for understanding our cancellation policy,
                      and we will do everything in our power to make sure we can
                      suit your events needs and dates. If you know that your
                      date may be subject to change, please let us know as soon
                      as possible. We may be available for your alternate date
                      and we would be able to move to another date at no extra
                      charge if it is available. We will do everything in our
                      power to make sure your event is the most memorable time
                      you have ever had.
                    </p>
                    <p>Thank You, </p>
                    <p>
                      Chad McNett
                      <br />
                      Owner/Operator <br />
                      Emerald City Photo Booth
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
export default withRoot(CancellationPolicy)
