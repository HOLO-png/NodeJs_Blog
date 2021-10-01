const Colections = require('../models/Colection');
const { monggooseToObj } = require('../../utils/monggoose');

class CoursesController {
    show(req, res, next) {
        Colections.findOne({ slug: req.params.slug })
            .then((colection) => {
                res.render('courses/show', {
                    colection: monggooseToObj(colection),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const course = new Colections(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }

    edit(req, res, next) {
        Colections.findById(req.params.id)
            .then((colection) => {
                res.render('courses/edit', {
                    colection: monggooseToObj(colection),
                });
            })
            .catch(next);
    }

    update(req, res, next) {
        Colections.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    delete(req, res, next) {
        Colections.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        Colections.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroy(req, res, next) {
        Colections.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    handelFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Colections.delete({ _id: { $in: req.body.gaixinhIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'action in validate!' });
        }
    }
}

module.exports = new CoursesController();

// const newsController = require('/NewsController');
