class HomeController {
    index(req, res, next) {
        res.send('home index');
    }
}

module.exports = new HomeController;