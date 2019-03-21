import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainMenu from './MainMenu'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import './dist/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'


library.add(faHeart)
library.add(faBars)
library.add(faFacebook)
library.add(faPinterest)
library.add(faTwitter)


const styles = theme => ({
  topper: {
    backgroundColor: '#fff',
  },
  root: {},
})

class Page extends React.Component {
  render() {
    const { children, classes } = this.props
    return (
      <div id="master">
        <div className="widgetized-page">
          <div className={classes.topper}>
            <Grid container justify="center" alignItems="stretch">
              <Grid item xs className={classes.root}>
                <Header />
                  <MainMenu />
                  <div id="content" className="site-content">
                    {children}
                  </div>
                <Footer />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Page)
