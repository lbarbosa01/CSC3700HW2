const express = require('express');
const router = express.Router();
const path = require('path');
let products = [];

router.get(  '/survey', (req, res, next) => {
    res.render('survey',
        {
            from: 'surveyResults'
        })
});

router.post(  '/product', (req, res, next) => {
    // console.log( req );
    console.log("----flag");
    let t = req.body.title;
    products.push({title: t});
    res.redirect('/add-product')
    // res.send(`Made it to post title:${t}`);
});

// module.exports = router;
exports.products = products;
exports.routes = router;