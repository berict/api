'use strict';
module.exports = function (app) {
    var controller = require('../controllers/apiController');

    // todoList Routes
    app.route('/tapad/presets')
        .get(controller.get_presets)
        .post(controller.post_preset);


    app.route('/tapad/presets/:presetId')
        .get(controller.get_preset)
        .put(controller.put_preset)
        .delete(controller.delete_preset);

    app.route('/tapad/version')
        .get(controller.get_version)
        .post(controller.post_version);
};