const DataCollection = require('../model/deviceInfo');

module.exports.getUpdatePage = (req, res) => {
  // update page appearence
  //   res.render('update');
  res.send('update page is available here,');
};

// update by id...
module.exports.updatePostbyId = async (req, res) => {
  res.send('update post request depend on id');
  //   const { deviceId, deviceType,  currentVersion, values } = req.body;
  //   const id = req.params;
  const deviceVersion = await DataCollection.findOne({ deviceId: id })
    .deviceVersion;
  if (deviceVersion != currentVersion) {
    deviceVersion = currentVersion;
    DataCollection.findOneAndUpdate(id, {});
  } else {
    DataCollection.findOneAndUpdate(id, {});
  }
  //
};

// update by type...
module.exports.updatePostbyType = (req, res) => {
  res.send('update post request depend on Type');
  //   const { deviceId, deviceType, values } = req.body;
  //   const type = req.params;
  DataCollection.find({ deviceType: type }).forEach((data) => {
    const id = data._id;
  });
};
