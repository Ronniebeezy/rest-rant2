const placesRouter = require('express').Router();
const places = require('../models/places');

placesRouter.get('/', (req, res) => {
    res.render('places/Index', { places })

});


    placesRouter.get('/new', (req, res) => {
        res.render('places/New');
    });
    
    placesRouter.post('/', (req,res) => {
        
        if (!req.body.pic) {
            //default image if one not provided
            req.body.pic = 'http://placekitten.com/400/400';
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA';
        }
        places.push(req.body)
        res.redirect('/places');
    });

module.exports = placesRouter;