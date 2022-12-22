// const { name } = require('ejs');

const Course = require('../models/course');

const allCourses = async (req, res) => {
    const courses = await Course.findAll({
        raw: true
    }).catch(error => console.log(error));
    console.log(courses)
    await res.render('home', { data: courses });
}
const courseform = async (req, res) => {
    await res.render('create');
}
const saveCourse = async (req, res) => {
    console.log(req.body);
    const { name, duration, fees } = await req.body;
    const course = await Course.create({
        coursename: name, duration: duration, fees: fees
    }).catch(error => console.log(error));
    console.log(course)
    await res.redirect('/');

    // await res.render('create');
}
const editCourse = async (req, res) => {
    // console.log(req.params)
    const { id } = await req.params;
    const course = await Course.findOne({
        where: {
            id: id
        },
        raw: true
    }).catch(error => console.log(error))
    // console.log(course);
    res.render('edit', { data: course })
}
const updateCourse = async (req, res) => {
    // console.log(req.params)
    const { id } = req.params;
    const data = req.body;
    const selector = { where: { id: id } }
    await Course.update(data, selector).catch(error => console.log(error));
    console.log(req.params)
    res.redirect('/')
}
const deleteCourse = async (req, res) => {
    // console.log(req.params)
    const { id } = await req.params;
    const course = await Course.destroy({
        where: {
            id: id
        },
        raw: true
    }).catch(error => console.log(error))

    res.redirect('/')
}
module.exports = {
    allCourses, courseform, saveCourse, editCourse, updateCourse, deleteCourse
}