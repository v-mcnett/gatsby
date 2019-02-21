import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const Footer = props => {
  const {
    company,
    contact: { email },
  } = props.data.site.siteMetadata;
  return (
      <footer id="colophon" className="site-footer has-footer-widgets">

      <div class="site-info-wrapper">
				<div class="site-boundary">
					<div class="site-info">
						<section id="custom_html-2" class="widget_text widget widget_custom_html">
              <div class="textwidget custom-html-widget"><center><a title="" href="/about-us">About Us</a> |  <a title="" href="/cancellation-policy">Cancellation Policy</a> | <a title="" href="/privacy-policy">Privacy Policy</a><br/><br />Serving Washington State, including Bellevue, Bonney Lake, Everett, Issaquah, Kent, Kirkland, Lynnwood, Newcastle, Maple Valley, Mercer Island, Redmond, Seattle, Snohomish, Tacoma, Woodinville</center></div>
            </section>											
				</div>
			</div>
      <div><Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {company}{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            {email}
          </Typography></div>

    </div>  
    </footer>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            company
            contact {
              email
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);