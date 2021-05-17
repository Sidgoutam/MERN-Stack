import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default class Header extends Component {
    render() {
        var header = {
          padding:'.5rem 0',
          backgroundColor : '#314767'
        }
        var icon1 = {
          fontSize : '2rem',
          color : 'lightblue',
          paddingLeft : '2rem'
        }
        var icon2 = {
          marginTop : '-1.2rem',
          paddingLeft : '5rem',
          paddingBottom : '.5rem'
        }

        var list = {
          color :'white',
        }

        return (
          <div>
            <div style={header}>
              <h2 style={icon1}>Quikie</h2>
              <h5 style={icon2}>Apps</h5>
              <ul>
                <li>
                <Link to="/" style={list}>Companies</Link>
                </li>
                <li>
                <Link to="/create" style={list}>Add Company</Link>
                </li>
              </ul>
            </div>
            
          </div>
        );
      }
}
