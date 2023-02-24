import React from 'react';
import { render } from 'react-dom';
import CenteredTree from './CenteredTree';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  cyan500, cyan700,
  indigo900,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack
}
  from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#002663',
    primary2Color: '#1274B8',
    primary3Color: grey400,
    accent1Color: '#009D78',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: '#002663',
    shadowColor: fullBlack
  },

  chip: {
    backgroundColor: '#002663'
  },

  avatar: {
    backgroundColor: '#002663'
  }

});


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <CenteredTree />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
