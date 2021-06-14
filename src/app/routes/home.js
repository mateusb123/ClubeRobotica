module.exports = function(app) {
    app.use('/', (req,res) => {
        res.render('home/index.html');
    });
}