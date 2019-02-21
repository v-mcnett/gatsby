import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = props => (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const title = props.title || data.site.siteMetadata.defaultTitle;
        return (
          <Helmet
            htmlAttributes={{
              lang: "en",
            }}
            title={title}
            titleTemplate={`%s - ${data.site.siteMetadata.company}`}
          >
            {props.children}
          </Helmet>
        );
      }}
    />
  ),
  detailsQuery = graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          defaultTitle
          company
        }
      }
    }
  `;

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

export default SEO;