const express = require('express');
const router = express.Router();
const { allCourses, courseform, saveCourse, editCourse, updateCourse, deleteCourse } = require('../controllers/coursecontroller');

router.get('/', allCourses);
router.get('/create', courseform);
router.post('/create', saveCourse);
router.get('/edit/:id', editCourse);
router.post('/update/:id', updateCourse);
router.get('/delete/:id', deleteCourse);
module.exports = router;