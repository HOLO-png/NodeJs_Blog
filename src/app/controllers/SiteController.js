const Colections = require('../models/Colection');
const { mutipleMonggooseToObj } = require('../../utils/monggoose');

class SiteController {
    home(req, res, next) {
        // Colections.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err) // khi xay ra loi thi ham next se tu dong chuyen cai error nay sang middwera de xu ly
        //         // res.status(400).json({ error: 'loi roi!!' });
        //     }
        // });

        Colections.find({})
            .then((courses) => {
                res.render('home', { courses: mutipleMonggooseToObj(courses) });
            })
            .catch(next);
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

// const newsController = require('/NewsController');
