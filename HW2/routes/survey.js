const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require("./admin");

router.get( '/surveyResults', (req, res, next ) => {
    console.log("----------------");
    console.log(adminData.products);
    res.render( 'surveyResults', {
        title: "Survey Results",
        from: 'surveyResults',
        products: adminData.products
    });
});

module.exports = router;