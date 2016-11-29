var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/budgets';
var db = pgp(connectionString);

// add query functions
function getAllBudgets(req, res, next) {
  db.any('select * from budgets')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL budgets'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getOneBudget(req, res, next) {
  var budgetID = parseInt(req.params.id);
  db.one('select * from budgets where id = $1', budgetID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE budget'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createBudget(req, res, next) {
  req.body.amount = parseInt(req.body.amount);
  db.none('insert into budgets(nickname, type, amount)' +
      'values(${nickname}, ${type}, ${amount})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one budget'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function updateBudget(req, res, next) {
  db.none('update budgets set nickname=$1, type=$2, amount=$3 where id=$4',
    [req.body.nickname, req.body.type, parseInt(req.body.amount), parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated budget'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function removeBudget(req, res, next) {
  var budgetID = parseInt(req.params.id);
  db.result('delete from budgets where id = $1', budgetID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} budget`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllBudgets: getAllBudgets,
  getOneBudget: getOneBudget,
  createBudget: createBudget,
  updateBudget: updateBudget,
  removeBudget: removeBudget
};
