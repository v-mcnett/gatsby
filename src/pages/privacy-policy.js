import React from 'react'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <Page title="Privacy Policy">
      <div id="content" className="site-content ecpb-site-boundary">
        <div id="primary" className="content-area">
          <main id="main" className="site-main">
                  <h1>Privacy Policy</h1>

                  <div className="entry-content">
                    <div class="field-item even" property="content:encoded">
                      <p>
                        To Our Clients:
                        <br />
                        Your privacy is important to us, and maintaining your
                        trust and confidence is one of our highest priorities.
                        We respect your right to keep your personal information
                        confidential and understand your desire to avoid
                        unwanted solicitations. We hope that by taking a few
                        minutes to read the policy, you will have a better
                        understanding of what we do with the information you
                        provide us and how we keep it private and secure.
                      </p>
                      <h2>Types of Information We Collect</h2>
                      <p>
                        This notice applies to all information collected or
                        submitted on the Emerald City Photo Booth website. On
                        some pages, you can provide information and make
                        requests. The types of personal information collected at
                        these pages are:
                      </p>
                      <ul>
                        <li>Name</li>
                        <li>Phone Number</li>
                        <li>E-mail address</li>
                        <li>Event Date/Location</li>
                      </ul>
                      <h2>Parties to Whom We Disclose Information</h2>
                      <p>
                        Per company policy, we do not disclose personal
                        information about our clients or former clients to
                        anyone. Your information is important to us, and we will
                        never sell or distribute your contact information.
                      </p>
                      <h2>Links</h2>
                      <p>
                        This web site may contain links to other sites. Please
                        be aware that we, Emerald City Photo Booth, are not
                        responsible for the privacy practices of sites other
                        than our own. We encourage our users to be aware when
                        they leave our site and to read the privacy statements
                        of each and every web site that collects personally
                        identifiable information. This privacy statement applies
                        solely to information collected by this web site.
                      </p>
                      <h2>
                        Confidentiality and Security of Nonpublic Personal
                        Information
                      </h2>
                      <p>
                        Except as otherwise described in this notice, we
                        restrict access to nonpublic personal information about
                        you to employees of our firm and other parties who must
                        use that information to provide services to you. Their
                        right to further disclose and use the information is
                        limited by the policies of our firm, applicable law, our
                        Code of Professional Conduct, and nondisclosure
                        agreements where appropriate. We also maintain physical,
                        electronic, and procedural safeguards in compliance with
                        applicable laws and regulations to guard your personal
                        information from unauthorized access, alteration, or
                        premature destruction.
                      </p>
                      <p>
                        Thank you for allowing us to serve your needs. We value
                        your business and are committed to protecting your
                        privacy. We hope you view our firm as your most trusted
                        advisor and we will work to continue earning your trust.
                        Please call us if you have any questions or if we can be
                        of further service.
                      </p>
                    </div>
                  </div>
              </main>
            </div>
        </div>
      </Page>
    )
  }
}
export default withRoot(PrivacyPolicy)
