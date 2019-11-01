import React from "react";
import Page from "../components/Page";
import { Link } from 'gatsby'
import Typography from "@material-ui/core/Typography";
import withRoot from "../utils/withRoot";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Page title="Not Found">
        <div id="content" className="site-content ecpb-site-boundary">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
        
              <h4>
                Sorry, we can't find the page you were looking for.
              </h4>
              <p>Return to the <Link to="/">homepage</Link>.</p>
              </main>
          </div>
        </div>

      </Page>
    );
  }
}
export default withRoot(NotFoundPage);