import React, { Component } from 'react';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import MdEdit from '@material-ui/icons/Edit';
import MdStar from '@material-ui/icons/Star';
import MdFavorite from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    color: '#fff',
  },
  paper: {
    width: '100%',
    maxWidth: 960,
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  state = {
    direction: 'up',
    isOpen: false,
  };

  handleChange = (event) => {
    this.setState({ direction: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { direction, isOpen } = this.state;
    return (
      <div className={classes.root}>
        <h2>Material Floating Button Menu Demo</h2>
        <FormControl className={classes.formControl}>
          <InputLabel>Direction</InputLabel>
          <Select
            value={this.state.direction}
            onChange={this.handleChange}
            inputProps={{
              name: 'direction',
            }}
          >
            <MenuItem value={'up'}>Up</MenuItem>
            <MenuItem value={'down'}>Down</MenuItem>
            <MenuItem value={'left'}>Left</MenuItem>
            <MenuItem value={'right'}>Right</MenuItem>
          </Select>
        </FormControl>
        <Paper className={classes.paper} elevation={4}>
          <FloatingMenu slideSpeed={500} direction={direction} isOpen={isOpen} spacing={8}>
            <MainButton
              iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
              iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
              background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
              onClick={() => {
                this.setState({ isOpen: !this.state.isOpen });
                console.log('clicked');
              }}
              size={56}
            />
            <ChildButton
              icon={<MdEdit style={{ fontSize: 20 }} nativeColor="white" />}
              background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
              size={40}
              onClick={() => console.log('First button clicked')}
            />
            <ChildButton
              icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="white" />}
              background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
              size={40}
            />
            <ChildButton
              icon={<MdStar style={{ fontSize: 20 }} nativeColor="white" />}
              background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
              size={40}
            />
          </FloatingMenu>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
