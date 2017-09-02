'use strict';
module.exports = function (app) {
    var controller = require('../controllers/apiController');

    app.route('/tapad/presets')
        .get(controller.get_presets)
        .post(controller.post_preset);

    app.route('/tapad/presets/:tag')
        .get(controller.get_preset)
        .put(controller.put_preset)
        .delete(controller.delete_preset);

    app.route('/tapad/version')
        .get(controller.get_version)
        .put(controller.put_version);
};