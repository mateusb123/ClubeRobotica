module.exports = function(app) {
    app.use('/admin', (req,res) => {
        res.render('admin/login.html');
    });
}