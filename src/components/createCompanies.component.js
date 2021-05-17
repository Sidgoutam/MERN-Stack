import axios from 'axios';
import React, {Component} from 'react'

export default class CreateCompanies extends Component {
    constructor(props){
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeSymbol = this.onChangeSymbol.bind(this);
        this.onChangeMarketCap = this.onChangeMarketCap.bind(this);
        this.onChangeCurrentPrice = this.onChangeCurrentPrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            companyname : '',
            symbol : '',
            marketcap : '',
            currentprice : '',
            companies : []
        }
    }

    onChangeCompanyName(e){
        this.setState({
            companyname : e.target.value
        });
    }

    onChangeSymbol(e){
        this.setState({
            symbol : e.target.value
        });
    }

    onChangeMarketCap(e){
        this.setState({
            marketcap : e.target.value
        });
    }

    onChangeCurrentPrice(e){
        this.setState({
            currentprice : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const company = {
            companyname : this.state.companyname,
            symbol : this.state.symbol,
            marketcap : this.state.marketcap,
            currentprice : this.state.currentprice,
        }

        axios.post('http://localhost:5000/companies/add',company)
            .then(res=>console.log(res.data));

        window.location='/';
    }

    render(){
        return (
            <div style={{marginTop : '2rem'}}>
      <h3 style={{marginLeft:'11rem'}}>Add new company information</h3>
      <form onSubmit={this.onSubmit} style={{width:'50%',marginLeft:'11rem'}}>
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
          <label>Symbol: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.symbol}
              onChange={this.onChangeSymbol}
              />
        </div>
        <div className="form-group">
          <label>Market Cap: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.marketcap}
              onChange={this.onChangeMarketCap}
              />
        </div>
        <div className="form-group">
          <label>Current Price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.currentprice}
              onChange={this.onChangeCurrentPrice}
              />
        </div>

        <div className="form-group">
        <input type="submit" value="Add new Company Details" className="btn btn-primary" />
        </div>
      </form>
    </div>
        )
    }
    
}
