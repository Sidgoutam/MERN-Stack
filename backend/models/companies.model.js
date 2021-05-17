const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const compSchema = new Schema({
  companyname: { type: String, required: true},
  symbol: { type: String, required: true  } ,
  marketcap: { type: String, required: true} ,
  currentprice: { type: String, required: true}
}, {
  timestamps: true,
});

const Company = mongoose.model('Company', compSchema);

module.exports = Company;