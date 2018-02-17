var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../database/models/Book.js');
var Categories = require('../database/models/Categories.js');
var User = require('../database/models/user').User;
var Tags = require('../database/models/Tag.js');


router.get('/', function(req, res, next) {
    Book.find(function (err, products) {
        if (err) return next(err);

        res.json(products);
    });    
});

router.get('/categories', function(req, res, next) {
    
    Categories.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/tags', function(req, res, next) {
    
    Tags.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/tags/:id', function(req, res, next) {
    
    Tags.find({ books: req.params.id }, function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.post('/tag', function(req, res, next) {
    Tag.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put('tag/:id', function(req, res, next) {
    Tag.findByIdAndUpdate( req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


 router.get('/:id', function(req, res, next) {
    Book.findById( req.params.id , function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.post('/', function(req, res, next) {
    Book.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.put('/:id', function(req, res, next) {
    Book.findByIdAndUpdate( req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.delete('/:id', function(req, res, next) {
    Book.findByIdAndRemove( req.params.id , req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
}); 
 
module.exports = router;