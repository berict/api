var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

mongoose = require('mongoose'),
    Presets = require('./api/models/apiModelPresets'),
    Version = require('./api/models/apiModelVersion'),
    bodyParser = require('body-parser');

var mongo_express = require('mongo-express/lib/middleware');
var mongo_express_config = require('./node_modules/mongo-express/config');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('localhost/PresetDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/apiRoutes'); //importing route
routes(app); //register the route

// not found exception
app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.use('/mongo_express', mongo_express(mongo_express_config));

app.listen(port);

console.log('berict api started on port ' + port);
