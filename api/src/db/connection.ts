import mongoose from 'mongoose';
mongoose.connect('mongodb://192.168.33.21:27017/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("we're connected!");
});
module.exports = db