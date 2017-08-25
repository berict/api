'use strict';
module.exports = function (app) {
    var controller = require('../controllers/apiController');

    app.route('/tapad/presets')
        .get(controller.get_presets)
        .post(controller.post_preset);

    console.log("Routed /tapad/presets");

    app.route('/tapad/presets/:presetId')
        .get(controller.get_preset)
        .put(controller.put_preset)
        .delete(controller.delete_preset);

    console.log("Routed /tapad/presets/:presetId");

    app.route('/tapad/version')
        .get(controller.get_version)
        .put(controller.put_version);

    console.log("Routed /tapad/version");
};