//Dependencies
var express = require('express');
var router = express.Router();
//  data model.
var db = require('../models');
// GET using seq findAll method
router.get('/', function (req, res) {
    db.Burger.findAll({
        order: 'burger_name ASC',
    }).then(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});
// POST seq create with name
router.post('/burgers/create', function (req, res) {
    console.log(req.body);
    var burgerName = req.body.burger_name;
    db.Burger.create({
        burger_name: burgerName
    }).then(function () {
        res.redirect('/');
    });
});
// put route -> back to index
router.put("/burgers/update", function (req, res) {
    console.log("Request Body Below");
    console.log(req.body);
    db.Burger.update({
        devoured: true,
    }, {
        where: {
            id: req.body.burger_id
        }
    }).then(function () {
        res.redirect("/");
    });
});
//Working on Customer addition
// POST create with customer name update name to burger marking burger as eaten
router.put('/api/new/customer/:id', function (req, res) {
    var customerName = req.body.customer_name;
    db.Customer.create({
        customer_name: customerName
    }).then(function (data) {
        var devoured = true;
        var ID = req.params.id;
        db.Burger.update({
            devoured: devoured,
            CustomerId: data.id
        }, {
            where: {
                id: ID
            }
        }).then(function () {
            res.redirect('/');
        });
    });
});
// PUT clear customer id to make burger eaten
router.put('/:id', function (req, res) {
    var devoured = false;
    var ID = req.params.id;
    db.Burger.update({
        devoured: devoured,
        CustomerId: null
    }, {
        where: {
            id: ID
        }
    }).then(function () {
        res.redirect('/');
    });
});
// Export routes for server.js.
module.exports = router;