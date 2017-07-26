const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoSchema = new Schema({
    title : String,
    url : String,
    description : String
});

const videoModel = mongoose.model('videoModel', videoSchema, 'videos');

module.exports = videoModel;