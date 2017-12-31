import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let smartphoneShema = new Schema({
    name: String
})

module.exports = mongoose.model('Smartphone', smartphoneShema);