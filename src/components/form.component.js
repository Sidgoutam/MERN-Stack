import React, { Component } from 'react';
import {Container , Row, Col} from 'reactstrap';
import GOOGL from '../images/GOOGL.png';
import FB from '../images/FB.png';
import AMZN from '../images/AMZN.svg';

export default class Form extends Component {
    render() {
        var formstyle = {
            backgroundColor : '#DBEFEC',
            width : '15rem',
            border : '1.5px dotted skyblue'
          }
          var imgstyle = {
            width : '3rem',
            float : 'right',
            margin : '-2rem 2rem 0 0'
          }

        return(
            <div>
                <Container style={{margin:'2rem 0 0 10rem'}}>
                    <Row>
                        <Col>
                        <form style={formstyle}>
                            <h6 style={{padding : '2rem 0 0 1rem',fontSize: '1rem',marginBottom:'0rem'}}>GOOGL</h6>
                            <img style = {imgstyle} src = {GOOGL} alt="google"></img>
                            <h2 style={{textAlign:'center',padding:'2rem'}}>1515 USD</h2>
                        </form>
                        </Col>
                        <Col>
                        <form style={formstyle}>
                            <h6 style={{padding : '2rem 0 0 1rem',fontSize: '1rem',marginBottom:'0rem'}}>FB</h6>
                            <img style = {imgstyle} src = {FB} alt="FB"></img>
                            <h2 style={{textAlign:'center',padding:'2rem'}}>266 USD</h2>
                        </form>
                        </Col>
                        <Col>
                        <form style={formstyle}>
                            <h6 style={{padding : '2rem 0 0 1rem',fontSize: '1rem',marginBottom:'0rem'}}>AMZN</h6>
                            <img style = {imgstyle} src = {AMZN} alt="AMZN"></img>
                            <h2 style={{textAlign:'center',padding:'2rem'}}>3116 USD</h2>
                        </form>  
                        </Col>
                    </Row>
                </Container> 
            </div>
        );
    }
}