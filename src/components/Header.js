import React from 'react'
import '../App.css'

class Header extends React.Component {

    render(){
        return(
          <div className = "headContainer">
            <h1 className = "headMainText">Movie Searcher App</h1>
            <h3 className = "headDescription">Welcome to the best movie search app. This app isusing the MovieDB database to render data and movie information</h3>
          </div>
        );
    };
}

export default Header