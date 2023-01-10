const express = require('express');
const router = express.Router();
const Blogs = require('../models/Blogs');
const BlogsController = require('../controllers/Blogs');
const Category = require('../models/Category');
const multer = require('multer');
const fs = require('fs')
//image upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
}).single('image');

// show all blog in admin panel in tabular format
router.get('/blog/get', BlogsController.blogs_get_all);

//show blog to user in home page
router.get('/', BlogsController.blogs_get_all_home);

//admin panel route 
router.get('/admin', BlogsController.blogs_get_all_admin);

// Add blog route Addblog page
router.get('/addblog/get', BlogsController.blogs_create_blogs)

//show panel from user side
router.get('/show/:slug', BlogsController.blogs_get_all_show);

//create blog
router.post('/blog/create', upload, BlogsController.blogs_creates_blogs);

//edit blog
router.get('/blog/:id', BlogsController.blogs_edit_all_blogs);

//Update blog
router.post('/updates/:id', upload, BlogsController.blogs_update_all_blogs);

//Delete blog
router.get('/deletes/:id', BlogsController.blogs_delete_all_blogs)

module.exports = router;