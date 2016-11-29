var express = require('express');
var router = express.Router();

var db = require('../queries');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/v1/budgets', db.getAllBudgets);
router.get('/api/v1/budgets/:id', db.getOneBudget);
router.post('/api/v1/budgets', db.createBudget);
router.put('/api/v1/budgets/:id', db.updateBudget);
router.delete('/api/v1/budgets/:id', db.removeBudget);

module.exports = router;
