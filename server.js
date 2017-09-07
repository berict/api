var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

mongoose = require('mongoose'),
    Schema = require('./api/models/apiModelSchema'),
    Presets = require('./api/models/apiModelPresets'),
    Version = require('./api/models/apiModelVersion'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://read:pass@127.0.0.1/PresetDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

// not found exception
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('berict api started on port ' + port);
