import React from 'react'
import Page from '../components/Page'
import withRoot from '../utils/withRoot'

class Packages extends React.Component {
  render() {
    return (
      <Page title="Packages">
        <h1 className="entry-title">Pricing</h1>
        <div className="entry-content">
          <p>
            We have 3 simple all inclusive packages to choose from, but we will
            gladly work with you to find a package to suit you. Packages include
            set-up and delivery!
          </p>
          <table id="package_table" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <th>&nbsp;</th>
                <th>Silver</th>
                <th>Gold</th>
                <th>Platinum</th>
              </tr>
            </tbody>
            <tr>
              <td className="description">Unlimited Pictures for 4 Hours</td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">
                The Prop Box
                <br />
                Includes goofy hats, silly sunglasses, fun boas and more!
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">Set-up and Removal Included</td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">
                Professional and Entertaining Attendant
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">Private Online Photo Gallery</td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">
                Personalized Photo Strips
                <br />
                Couple’s names and wedding date
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">
                Double Photo Strips in Black &amp; White or Color
              </td>
              <td valign="top">
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td valign="top">
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td valign="top">
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">Customized Photo Booth Music</td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">USB with All Photos</td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">Customized Guest Book</td>
              <td />
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">
                2nd Attendant
                <br />
                To help guests with your scrapbook
              </td>
              <td />
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">Extra Set of Double Strips</td>
              <td />
              <td />
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">
                Guest Option to Leave 30 Seconds of Video
              </td>
              <td />
              <td />
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">
                Guest Option to Print Their Favorite Picture in 4×6
              </td>
              <td />
              <td />
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
            <tr>
              <td className="description">USB Drive of all Photos and Video</td>
              <td />
              <td />
              <td>
                <img
                  src="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  alt="included"
                  width="24"
                  vspace="2"
                  height="20"
                  srcSet="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?zoom=2&amp;resize=24%2C20"
                  src-orig="https://i0.wp.com/www.emeraldcityphotobooth.com/images/check.gif?resize=24%2C20"
                  scale="2"
                />
              </td>
            </tr>
          </table>
        </div>
        <p>
          Call us for pricing at <a href="tel:+13603670329">360-367-0329</a>.
        </p>
        <h2>Silver Deluxe Package</h2>
        <p>
          The Silver Package is a great way to set your wedding apart from every
          other wedding your guests will attend this year. The photo booth will
          be available for <strong>unlimited use for 4 hours</strong>, including
          an attendant to serve your guests and the <strong>Prop Box</strong>.
          The Prop Box is sure to bring out the wild side in you and your guests
          crazy hats, goofy glasses and so much more. Photo strips can be
          customized with the bride and groom’s name, and wedding date, which
          make the perfect wedding favor!
        </p>
        <h2>Gold Deluxe Package</h2>
        <p>
          The Gold Package includes everything the Silver Package does, in
          addition to a copyright free CD of all photos from the event. It also
          includes the creation of a <strong>one-of-a-kind guest book</strong>.
          We provide the tools, including the guest book, scissors, glue and a
          second attendant that will help your guests use their second photo
          strip to create this unique keepsake.
        </p>
        <h2>Platinum Deluxe Package</h2>
        <p>
          With everything listed above, plus <strong>video</strong>, the
          Platinum Package is the ultimate in wedding fun! Your guests will get
          an option for an extra strip of <strong>double photo strips</strong>,
          which is wonderful for large groups. Guests also have the option to
          print one 4×6 of their favorite photo. You will get the guest book, as
          in the Gold Package. But your guests will also get to leave you 30
          seconds of video after they take their pictures. You will leave the
          event with a USB compiled with all the photos and all the video
          footage.
        </p>
        <p>
          Call us for pricing at <a href="tel:+13603670329">360-367-0329</a>.
        </p>
        <p>
          <strong>
            Reserve your date, non refundable deposit of $295, applies to
            purchase.{' '}
            <a href="http://www.emeraldcityphotobooth.com/book-a-booth">
              Book yours now!
            </a>
          </strong>
        </p>
      </Page>
    )
  }
}
export default withRoot(Packages)
