'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    preset: {type: Schema.Types.ObjectId, ref: 'Presets'},
    version: {type: Schema.Types.ObjectId, ref: 'Version'}
});

module.exports = mongoose.model('Schema', schema);