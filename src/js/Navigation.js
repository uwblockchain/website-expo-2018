import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 }}>
      {props.children}
    </Typography>
    );
  }  

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1
    },
  menu: {
    marginLeft: '40%'
  }
  };
  

class Navigation extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="regular">
            <Typography variant="title" color="inherit">
              UW Blockchain Expo
            </Typography>
            <Typography variant="subheading" color="inherit">
              Oct 13
              <br />
              2018
            </Typography>
            <Button className={classes.menu} variant="outlined" color="inherit">
              Get Tickets
            </Button>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Speakers" />
              <Tab label="Workshops" />
              <Tab label="Sponsors" />
              <Tab label="Contact" />
            </Tabs>
          </Toolbar>
        </AppBar>
        {value === 0 && <TabContainer>Speaker Information</TabContainer>}
        {value === 1 && <TabContainer>Workshop Information</TabContainer>}
        {value === 2 && <TabContainer>Sponsor Information</TabContainer>}
        {value === 3 && <TabContainer>Contact Information</TabContainer>}
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);