const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const machinSchema = new Schema(
  {
    deviceId: {
      type: String,
    },
    deviceType: {
      type: String,
    },
    deviceVersion: {
      type: String,
      required: true,
    },
    values: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Data = mongoose.model('Blog', machinSchema);
module.exports = Data;
