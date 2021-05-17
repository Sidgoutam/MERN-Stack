import './App.css';
import { BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header.component";
import Form from "./components/form.component";
import CompaniesList from "./components/companies-list.component";
import EditCompanies from "./components/editCompanies.component";
import CreateCompanies from "./components/createCompanies.component";


function App() {
  return (
    <Router>
      <div className="Container">
        <Header />
        <Form />
        <Route path = '/' exact component = {CompaniesList} />
        <Route path = '/edit/:id' exact component = {EditCompanies} />
        <Route path = '/create' exact component = {CreateCompanies} />
      </div>
    </Router>
  );
}

export default App;
