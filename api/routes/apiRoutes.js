'use strict';
module.exports = function (app) {
    var presetList = require('../controllers/apiController');

    // todoList Routes
    app.route('/presets')
        .get(presetList.get_presets)
        .post(presetList.post_preset);


    app.route('/presets/:presetId')
        .get(presetList.get_preset)
        .put(presetList.put_preset)
        .delete(presetList.delete_preset);
};