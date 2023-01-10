const express = require('express');
const { off } = require('../models/Category');
const router = express.Router();
const Category = require('../models/Category');
const CategoryController = require('../controllers/Category')

//Show All Category
router.get('/category/get', CategoryController.category_get_all);

//edit category
router.get('/category/:id', CategoryController.category_edit_category);

//create category
router.post('/category/create', CategoryController.category_create_category);

//Update Category
router.post('/update/:id', CategoryController.category_update_category);

//Delete Category
router.get('/delete/:id', CategoryController.category_delete_category);

module.exports = router;