const DataCollection = require('../model/deviceInfo');

module.exports.getUpdatePage = (req, res) => {
  // update page appearence
  //   res.render('update');
  res.send('update page is available here,');
};

// update by id...
module.exports.updatePostbyId = (req, res) => {
  res.send('update post request depend on id');
  //   const { val1, val2, val3 } = req.body;
  //   const id = req.params;
  //   DataCollection.findOneAndUpdate(id, {});
};

// update by type...
module.exports.updatePostbyType = (req, res) => {
  res.send('update post request depend on Type');
  //   const { val1, val2, val3 } = req.body;
  //   const type = req.params;
  //   DataCollection.findOneAndUpdate(type, {});
};
