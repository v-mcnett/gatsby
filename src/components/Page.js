import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MainMenu from './MainMenu'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import './dist/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faCamera, faMask, faStar, faEnvelope, faPhone, faCalendar, faComment, faBookOpen, faCameraRetro, faImage, faChalkboardTeacher, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'


library.add(faHeart)
library.add(faBars)
library.add(faCheck)
library.add(faFacebook)
library.add(faPinterest)
library.add(faTwitter)
library.add(faStar)
library.add(faCamera)
library.add(faMask)
library.add(faEnvelope)
library.add(faPhone)
library.add(faCalendar)
library.add(faComment)
library.add(faBookOpen, faCameraRetro, faImage, faChalkboardTeacher, faIdCardAlt)


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
                  <MainMenu title={this.props.title}/>
                  <div id="page-content" className="site-content">
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
