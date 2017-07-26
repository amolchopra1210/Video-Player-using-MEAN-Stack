const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://amolchopra:mytimeisnow@ds153730.mlab.com:53730/videoplayer";

mongoose.Promise = global.Promise;

mongoose.connect(db, (err) => {
    if(err){
        console.log("Database error", err);
    }   
})

//Retrieving all the videos from the mongo db
router.get('/videos', (req, res) => {
    Video.find({}).exec((err, success) => {
        if(err){
            console.log(err);
        }else{
            res.json(success);
        }
    })
});

//Retrieving a single video from the mongo db
router.get('/videos/:id', (req, res) => {
    Video.findById(req.params.id).exec((err, video) => {
        if(err){
            res.send("Error",err);
        }else{
            res.json(video);
        }
    });
});

//insert data into database
router.post('/video', (req, res) => {
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save((err, success) => {
        if(err){
            res.send("Error saving video", err);
        }else{
            res.json(success);
        }
    });
});

//updating data in database

router.put('/video/:id', (req, res) => {
    Video.findByIdAndUpdate(req.params.id, {
        $set : {
            title : req.body.title, 
            url : req.body.url, 
            description: req.body.description
        },
    },{
      new : true  //if this is true, it returns updated video else it returned original video
    },
    (err, success) => {
        if(err){
            res.send("Error updating video", err);
        }else{
            res.json(success);
        }
    }
)});

//deleting a video from the database

router.delete('/video/:id', (req, res) => {
    Video.findByIdAndRemove(req.params.id,(err, success) => {
        if(err){
            res.send("Cannot delete the video", err);
        }else{
            res.json(success);
        }
    });
});
module.exports = router;