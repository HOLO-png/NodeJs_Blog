const Colections = require('../models/Colection');
const { mutipleMonggooseToObj } = require('../../utils/monggoose');

class MeController {
    storedCourses(req, res, next) {
        Promise.all([Colections.find({}),Colections.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => 
            res.render('me/storedMe', {
                deletedCount,
                courses: mutipleMonggooseToObj(courses),
            })
        )
        .catch(next);
    }

    trashCourses(req, res, next) {
        Colections.findDeleted({})
            .then((courses) => {
                res.render('me/trashMe', {
                    courses: mutipleMonggooseToObj(courses),
                });
            })
            .catch((err) => next(err));
    }
}

module.exports = new MeController();

// const newsController = require('/NewsController');
