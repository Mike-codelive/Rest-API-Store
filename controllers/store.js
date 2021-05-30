const path = require('path')
const product = require('../models/product')
const User = require('../models/users')
const Product = require('../models/product')
const ErrorResponce = require('../utils/errorResponse')

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getProducts = async (req, res, next) => {
  try {
    const user = await Product.find()

    res.status(201).json({
      success: true,
      data: user
    })
  } catch(err) {
    res.status(400).json({ success: false })
    console.log(err)
  }
}

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getProduct = async (req, res, next) => {
  try {
    const user = await Product.findById(req.params.id)

    if (!user) {
      res.status(400).json({ success: false })
    }

    res.status(201).json({
      success: true,
      data: user
    })
  } catch(err) {
    // res.status(400).json({ success: false })
    next(new ErrorResponce(`Bootcamp not found whit id of ${req.params.id}`, 404))
  }
}

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body)

    res.status(201).json({
      success: true,
      data: product
    })
  } catch(err) {
    res.status(400).json({ success: false })
    console.log(err)
  }
}

// @desc      Create new user
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createUser = async (req, res, next) => {

  try {
    const user = await User.create(req.body)

    res.status(201).json({
      success: true,
      data: user
    })
  } catch(err) {
    res.status(400).json({ success: false })
    console.log(err)
  }
}

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })

    if (!product) {
      res.status(400).json({ success: false })
    }

    res.status(201).json({
      success: true,
      data: product
    })
  } catch(err) {
    res.status(400).json({ success: false })
    console.log(err)
  }
}

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      res.status(400).json({ success: false })
    }

    res.status(201).json({
      success: true,
      data: product
    })
  } catch(err) {
    res.status(400).json({ success: false })
    console.log(err)
  }
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
