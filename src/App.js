import React, { Component } from 'react';
import './App.css';

let DefaultStyle= { 
color: 'white',
display: 'inline-block',
width: '25%',
background: 'rgba(255,255,255,0.30',
Margin: '10px',
padding: '10px',
};

class Aggregate extends Component {
    render() {
        return (
        <div className="aggregate">
            <h2>Number Text</h2>            
        </div>
      );
    }
  }

  class Filter extends Component {
      render() {
          return (
              <div className="Filter-Parent">
                  <img src="images/filter"/>
                  <input type={Text}/>
              </div>
          );
      }
  }

  class Playlist extends Component {
      render() {
          return (
              <div style={{...DefaultStyle}}>
                  <img />
                  <h3>playlist Name</h3>
                  <ul>
                      <li>Song 1</li><li>Song 2</li><li>Song 3</li>
                  </ul>

             </div>
          );
      }
      }

class App extends Component {
  render() {
      return (
      <div className="App">
          
          <h1>Title</h1>
          
          <Aggregate/><Aggregate/>
          <Filter/>
          <Playlist/><Playlist/><Playlist/><Playlist/><Playlist/><Playlist/>

      </div>
    );
  }
}

export default App;
