import './App.css';
import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//Importing each component
import home from './Components/Home';
import profile from './Components/Profile';
import login from './Components/Login';
import signup from './Components/Signup';
import Footer from './Components/Footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import ProfileView from './Components/ProfileView'

axios.defaults.baseURL = "https://us-central1-shopher.cloudfunctions.net/api";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'PT Sans',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div>
    <Navbar/>
        <div>
          <Switch>
            <Route exact path = "/" component = {home}/>
            <Route exact path = "/profile" component = {profile}/>
            <Route exact path = "/login" component = {login}/>
            <Route exact path = "/signup" component = {signup}/>
            <Route exact path = "/profileview" component = {ProfileView}/>
          </Switch>
        </div>
    </div>
    </Router>
    <Footer/>
    </ThemeProvider>
  );
}

export default App;
