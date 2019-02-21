import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  topper: {
    backgroundColor: "#eee",
  },
  root: {
    maxWidth: "1168px",
    marginTop: "94px",
  },
});

class Page extends React.Component {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.topper}>
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs className={classes.root}>
            <Header />
            <MainMenu />
            {children}
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Page);