const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const machinSchema = new Schema({
    MachineId:{
        type: String,
    },
    MachineType: {
        type: String,
    },
    currentVersion: {
        type:String,
        required: true
    },
    values: {
        type:String,
        required: true
    }
   
}, {timestamps : true});

const Data = mongoose.model('Blog', machinSchema);
module.exports = Data;