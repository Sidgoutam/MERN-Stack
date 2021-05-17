const router = require('express').Router();
let Company = require('../models/companies.model');

router.route('/').get((req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const companyname = req.body.companyname;
  const symbol = req.body.symbol;
  const marketcap = req.body.marketcap;
  const currentprice = req.body.currentprice;

  const newCompany = new Company({
    companyname,
    symbol,
    marketcap,
    currentprice
});

  newCompany.save()
    .then(() => res.json('Company added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Company.findById(req.params.id)
    .then(company => res.json(company))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Company.findByIdAndDelete(req.params.id)
    .then(() => res.json('Company Deleted !'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Company.findById(req.params.id)
    .then(company => {
      company.companyname = req.body.companyname;
      company.symbol = req.body.symbol;
      company.marketcap = req.body.marketcap;
      company.currentprice = req.body.currentprice;

      company.save()
        .then(() => res.json('Company updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;