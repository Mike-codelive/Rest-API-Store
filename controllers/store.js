const path = require('path');

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getProducts = (req, res, next) => {
  res.status(200).json({ success: true, data: 'product created' });
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getProduct = (req, res, next) => {
  res.status(200).json({ success: true, data: 'product created' });
};


// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createProduct = (req, res, next) => {
  res.status(200).json({ success: true, data: 'product created' });
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateProduct = (req, res, next) => {
  res.status(200).json({ success: true, data: 'product created' });
};


// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteProduct = (req, res, next) => {
  res.status(200).json({ success: true, data: 'product created' });
};


// @desc      Get bootcamps within a radius
// @route     GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access    Private
// exports.getProducts = (req, res, next) => {
//   res.status(200).json(res.advancedResults);
// };


// @desc      Upload photo for bootcamp
// @route     PUT /api/v1/bootcamps/:id/photo
// @access    Private
exports.putProduct = (req, res, next) => {
  res.status(200).json({ success: true, data: 'product created' });
};
