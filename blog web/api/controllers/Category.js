const Category = require('../models/Category');
const mongoose = require('mongoose');

//Show All Category
exports.category_get_all = (req, res) => {

    Category.find().exec((err, category) => {
        if (err) {
            res.json({ message: err.message })
        } else {
            res.render('Category', {
                category: category
            });
        }
    })

}

//create category
exports.category_create_category = (req, res) => {
    const create = new Category({
        category: req.body.category,

    });
    console.log(create);
    create.save((err) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' });
        } else {
            req.session.message = {
                type: 'success',
                message: 'Category added successfully'
            };
            res.redirect('/category/get');
        }

    })

}

//edit category
exports.category_edit_category = (req, res) => {
    console.log("req", req);
    let id = req.params.id;
    console.log("id", id);
    Category.findById(id, (err, category) => {
        console.log("category", category);
        if (err) {
            res.redirect('/');
        } else {
            res.render("Editcat", {
                category: category,
            });
        }
    }
    )
}

//Update Category
exports.category_update_category = (req, res) => {
    let id = req.params.id;
    Category.findByIdAndUpdate(id, {
        category: req.body.category,
    }, (err, result) => {
        if (err) {
            res.json({ message: err.message, type: 'danger' });
        } else {
            req.session.message = {
                type: 'success',
                message: 'Category Updated Successfully!',
            };
            res.redirect('/category/get');
        }
    })
}

//Delete Category
exports.category_delete_category = (req, res) => {
    let id = req.params.id;
    Category.findByIdAndRemove(id, (err, result) => {
        if (err) {
            res.json({ message: err.message });
        } else {
            req.session.message = {
                type: 'success',
                message: 'Category Deleted Successfully'
            };
            res.redirect('/category/get');
        }
    })
}