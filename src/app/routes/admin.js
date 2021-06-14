module.exports = function(app) {
    app.post('/admin', (req,res) => {
        if(req.body.user == 'Mateus000robotica' && req.body.password == 'Mateus000') {
            res.render('admin/index.html');
        } else {
            res.render('admin/login.html');    
        }
    });
    app.use('/admin', (req,res) => {
        res.render('admin/login.html');
    });
}