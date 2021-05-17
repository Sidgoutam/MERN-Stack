import React, { Component } from 'react';
import axios from 'axios';

export default class EditCompanies extends Component {
  constructor(props) {
    super(props);

    this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
    this.onChangeSymbol = this.onChangeSymbol.bind(this);
    this.onChangeMarketCap = this.onChangeMarketCap.bind(this);
    this.onChangeCurrentPrice = this.onChangeCurrentPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      companyname: '',
      symbol: '',
      marketcap: '',
      currentprice: '',
      companies: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/companies/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          companyname: response.data.companyname,
          symbol: response.data.symbol,
          marketcap: response.data.marketcap,
          currentprice: response.data.currentprice
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeCompanyName(e) {
    this.setState({
      companyname: e.target.value
    })
  }

  onChangeSymbol(e) {
    this.setState({
      symbol: e.target.value
    })
  }

  onChangeMarketCap(e) {
    this.setState({
      marketcap: e.target.value
    })
  }

  onChangeCurrentPrice(e) {
    this.setState({
      currentprice: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const company = {
      companyname: this.state.companyname,
      symbol: this.state.symbol,
      marketcap: this.state.marketcap,
      currentprice: this.state.currentprice
    }

    console.log(company);

    axios.post('http://localhost:5000/companies/update/' + this.props.match.params.id, company)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Company Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Company Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.companyname}
              onChange={this.onChangeCompanyName}
              />
        </div>
        <div className="form-group"> 
          <label>Symbol : </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.symbol}
              onChange={this.onChangeSymbol}
              />
        </div>
        <div className="form-group">
          <label>Market Cap : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.marketcap}
              onChange={this.onChangeMarketCap}
              />
        </div>
        <div className="form-group">
          <label>Current Price : </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.currentprice}
              onChange={this.onChangeCurrentPrice}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Company Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}