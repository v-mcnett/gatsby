import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import Page from '../components/Page'
import List from '../components/List'
import Tabs from '../components/Tabs'
import Slider from '../components/Slider'
import ReviewsSlider from '../components/ReviewsSlider'
import BoothGalleries from '../components/BoothGalleries'
import EventGalleries from '../components/EventGalleries'
import Gallery from '../components/Gallery'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Alien } from 'mdi-material-ui'
import { Robot } from 'mdi-material-ui'
import logo from '../../images/logo.png'
import withRoot from '../utils/withRoot'

const styles = theme => ({
    angles: {
      color: theme.palette.secondary.light,
      opacity: 0.5,
    },
    avatar: {
      width: '160px',
      height: '160px',
      marginBottom: '40px',
      backgroundColor: theme.palette.primary.light,
    },
    logo: {
      width: '100px',
      height: '100px',
      border: '0',
    },
    text: {
      textAlign: 'center',
    },
    tabs: {
      marginTop: '40px',
      marginBottom: '40px',
    },
  }),
  Home = props => {
    const {
      classes,
      data: {
        Products: { edges: products },
        Services: { edges: services },
        Basic: {
          siteMetadata: {
            domain,
            company,
            defaultTitle,
            preamble,
            postamble,
            defaultDescription,
            contact: { email },
          },
        },
        InstagramPosts: {
          edges: instaPost
        }
      },
    } = props
    return (
      <Page>
        <SEO title={defaultTitle}>
          <meta name="description" content={defaultDescription} />
          <link rel="canonical" href={domain} />
        </SEO>
        
        <Slider />
        <EventGalleries />
        <ReviewsSlider />
        <BoothGalleries />
        
        <div className={classes.text}>
          <Typography
            paragraph
            color="primary"
            gutterBottom
            variant="h1"
            component="span"
          >
            <span className={classes.angles}>&lt;</span> hi{' '}
            <span className={classes.angles}>&gt;</span>
          </Typography>
          <Typography paragraph gutterBottom variant="body1" component="span">
            {preamble}
          </Typography>
          <Typography paragraph gutterBottom variant="body1" component="span">
            {defaultDescription}
          </Typography>
        </div>
        <div className={props.classes.tabs}>
          <Tabs
            items={[
              ['Our Products', <Robot />, <List items={products} />],
              ['Our Services', <Alien />, <List items={services} />],
            ]}
          />
        </div>
        <div className={classes.text}>
          <Typography
            paragraph
            color="primary"
            gutterBottom
            variant="h5"
            component="span"
          >
            <span className={classes.angles}>&lt;</span> {email}{' '}
            <span className={classes.angles}>&gt;</span>
          </Typography>
        </div>
        <section>
          <Gallery posts={instaPost}/>
        </section>
      </Page>
    )
  }

export const query = graphql`
  query Name {
    Basic: site {
      siteMetadata {
        domain
        company
        defaultTitle
        preamble
        defaultDescription
        postamble
        contact {
          email
        }
      }
    }
    Products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            siteLink
            imageLink
          }
        }
      }
    }
    Services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            imageLink
          }
        }
      }
    }
    InstagramPosts: allInstaNode (limit: 9, sort: {
      fields: [timestamp]
      order: DESC
    }) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile{
            childImageSharp {
                fluid(maxHeight: 188, maxWidth: 188 quality: 50) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`


export default withRoot(withStyles(styles, { withTheme: true })(Home))
