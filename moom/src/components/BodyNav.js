import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

// const styles = {
//   navbtn: {
//     background: "#ba68c8",
//     color: "white",
//     "&:hover": {
//       background: "#ab47bc",
//     },
//   },
// };

class BodyNav extends Component {
  // 바디 컴포넌트의 네비 바
  render() {
    // const { classes } = this.props;
    return (
      <>
        <div>
          {/* <ButtonGroup size="large" variant="contained">
            <Button className={classes.navbtn} href="/">
              Basic
            </Button>
            <Button className={classes.navbtn} href="/custom">
              Custom
            </Button>
          </ButtonGroup> */}
        </div>
      </>
    );
  }
}

// withStyles(styles)
export default withRouter(BodyNav);
