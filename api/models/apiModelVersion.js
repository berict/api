'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var versionSchema = new Schema({
    version: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Version', versionSchema);