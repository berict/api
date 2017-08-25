'use strict';

var mongoose = require('mongoose'),
    Preset = mongoose.model('Presets'),
    VersionCode = mongoose.model('VersionCode');

exports.get_presets = function (req, res) {
    Preset.find({}, function (err, preset) {
        if (err)
            res.send(err);
        res.json(preset);
    });
};

exports.post_preset = function (req, res) {
    var new_preset = new Preset(req.body);
    new_preset.save(function (err, preset) {
        if (err)
            res.send(err);
        res.json(preset);
    });
};

exports.get_preset = function (req, res) {
    Preset.findById(req.params.presetId, function (err, preset) {
        if (err)
            res.send(err);
        res.json(preset);
    });
};

exports.put_preset = function (req, res) {
    Preset.findOneAndUpdate({_id: req.params.presetId}, req.body, {new: true}, function (err, preset) {
        if (err)
            res.send(err);
        res.json(preset);
    });
};

exports.delete_preset = function (req, res) {
    Preset.remove({
        _id: req.params.presetId
    }, function (err, preset) {
        if (err)
            res.send(err);
        res.json({message: 'Preset successfully deleted'});
    });
};

exports.get_version = function (req, res) {
    Version.find({}, function (err, version) {
        if (err)
            res.send(err);
        res.json(version);
    });
};

exports.post_version = function (req, res) {
    var new_version = new Version(req.body);
    new_version.save(function (err, version) {
        if (err)
            res.send(err);
        res.json(version);
    });
};