import React , { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Company = props => (
    <tr>
      <td>{props.company.companyname}</td>
      <td>{props.company.symbol}</td>
      <td>{props.company.marketcap}</td>
      <td>{props.company.currentprice}</td>
      <td><Link to={"/edit/"+props.company._id}>edit</Link> | <a href="/" onClick={() => { props.deleteCompanies(props.company._id) }}>delete</a></td>
    </tr>
  )


export default class CompaniesList extends Component {
    constructor(props) {
        super(props);
        this.deleteCompanies = this.deleteCompanies.bind(this)
        this.state = {companies: []};
      }
      componentDidMount() {
        axios.get('http://localhost:5000/companies/')
          .then(response => {
            this.setState({ companies: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      deleteCompanies(id){
        axios.delete('http://localhost:5000/companies/'+id)
          .then(response => { console.log(response.data)});

        this.setState({
          companies : this.state.companies.filter(el => el._id !== id)
          })
        }

      CompaniesList() {
        return this.state.companies.map(currentcompany => {
          return <Company company={currentcompany} deleteCompanies={this.deleteCompanies} key = {currentcompany._id}/>;
        })
      }

    render(){
        return (
            <div style={{margin:'4rem'}}>
                <h3>Stock Details Table</h3>
                <input type = 'text' placeholder = 'Search by company name'></input>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Company Name</th>
                    <th>Symbol</th>
                    <th>Market Cap</th>
                    <th>Current Price</th>
                    <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    { this.CompaniesList() }
                </tbody>
                </table>
            </div>
        )
    }
}

