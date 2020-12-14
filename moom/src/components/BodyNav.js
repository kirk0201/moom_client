import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const styles = {
  root: {
    // display: "flex",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border_color: "#ffffff",
    // border: 0,
    // flexDirection: "column",
    // alignItems: "center",
  },
};

class BodyNav extends Component {
  // 바디 컴포넌트의 네비 바
  render() {
    const { classes } = this.props;
    return (
      <>
        <div>
          <ButtonGroup
            className={classes.root}
            size="large"
            color="primary"
            variant="contained"
            aria-label="large outlined primary button group"
          >
            <Button className={classes.root} href="/">
              Basic
            </Button>
            <Button className={classes.root} href="/custom">
              Custom
            </Button>
          </ButtonGroup>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(withRouter(BodyNav));
