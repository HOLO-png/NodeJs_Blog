class NewsController {
    index(req, res) {
        res.render('news');
    }

    showDetail(req, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController();

// const newsController = require('/NewsController');
