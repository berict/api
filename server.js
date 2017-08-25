var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
mongoose = require('mongoose'),
    Task = require('./api/models/apiModel'), // model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PresetDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// not found exception
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('berict api started on port ' + port);