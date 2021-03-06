'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.model('Schema'),
    Preset = mongoose.model('Presets'),
    Version = mongoose.model('Version');

const JSON = require('circular-json');

exports.get_preset_schema = function (req, res) {
    Schema.findOne({})
        .populate('Presets', 'Version')
        .exec(function (err, schema) {
            if (err) {
                console.log(err);
                res.send({"error": err});
            } else {
                res.json(schema);
            }
        });
};

exports.get_presets = function (req, res) {
    Preset.find({}, function (err, preset) {
        if (err)
            res.send({"error": err});
        res.json(preset);
    });
};

exports.post_preset = function (req, res) {
    var new_preset = new Preset(req.body);
    new_preset.save(function (err, preset) {
        if (err)
            res.send({"error": err});
        res.json(preset);
    });
};

exports.get_preset = function (req, res) {
    // need to be findOne() for tag searches
    Preset.findOne({
        "preset.tag": req.params.tag
    }, function (err, preset) {
        if (err)
            res.send({"error": err});
        res.json(preset);
    });
};

exports.put_preset = function (req, res) {
    Preset.findOneAndUpdate({
        "preset.tag": req.params.tag
    }, req.body, {new: true}, function (err, preset) {
        if (err)
            res.send({"error": err});
        res.json(preset);
    });
};

exports.delete_preset = function (req, res) {
    Preset.remove({
        "preset.tag": req.params.tag
    }, function (err, preset) {
        if (err)
            res.send({"error": err});
        res.json({message: 'Preset successfully deleted'});
    });
};

exports.get_version = function (req, res) {
    Version.findOne({}, function (err, version) {
        if (err)
            res.send({"error": err});
        res.json(version);
    });
};

exports.put_version = function (req, res) {
    Version.findOneAndUpdate({}, req.body, {new: true}, function (err, preset) {
        if (err)
            res.send({"error": err});
        res.json(preset);
    });
};