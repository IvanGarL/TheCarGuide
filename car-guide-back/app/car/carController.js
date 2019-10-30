const express = require('express'),
      router = express.Router(),
      Car = require('./carModel');


//TODO: include auth.

router.post('/', async (req, res) => {
    //create a new car
    try {
        const car = new Car(req.body);
        await car.save();
        res.status(201).send({ car });
    } catch (error){
        res.status(400).send( error );
    }
});

router.post('/many', async (req, res) => {
    //create a new car
    try {
        const data = JSON.parse(req.body);
        Car.insertMany(data, (err, docs) =>{
            if(err) return next(err);
            res.send(docs);
        });
    } catch (error){
        res.status(400).send( error );
    }
});


router.get("/", (req, res) => {
    try{
        Car.find({}, (err, all) => {
            if(err) return next(err);
            res.send(all);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
})

router.get("/:license", (req, res) => {
    var req_license = req.params.license;
    try{
        Car.find({license: req_license}, (err, doc) => {
            if(err) return next(err);
            res.send(doc);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
});

router.put("/:license", (req, res) => {
    try{
        Car.findOneAndUpdate({license: req_license}, {$set : req.body}, (err, doc) => {
            if(err) return next(err);
            res.send(doc);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
});

router.delete("/:license", (req, res) => {
    var req_license = req.params.license;
    try{
        Car.deleteOne({license: req_license}, (err, doc) => {
            if(err) return next(err);
            res.send(doc);
        })
    } catch ( error ){
        res.status(400).send( error );
    }
});

//TODO: GET apis for filters

