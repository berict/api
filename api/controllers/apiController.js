'use strict';

var mongoose = require('mongoose'),
    Preset = mongoose.model('Presets'),
    Version = mongoose.model('Version');

function getPresets() {
    Preset.find({}, function (err, preset) {
        if (err)
            return [];
        return preset;
    });
}

function getVersion() {
    Version.findOne({}, function (err, version) {
        if (err)
            return -1;
        return version;
    });
}

exports.get_preset_schema = function (req, res) {
    var schema = {
        "presets": getPresets(),
        "versionCode": getVersion()
    };
    res.json(schema);
};

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
    // need to be findOne() for tag searches
    Preset.findOne({
        "preset.tag": req.params.tag
    }, function (err, preset) {
        if (err)
            res.send(err);
        res.json(preset);
    });
};

exports.put_preset = function (req, res) {
    Preset.findOneAndUpdate({
        "preset.tag": req.params.tag
    }, req.body, {new: true}, function (err, preset) {
        if (err)
            res.send(err);
        res.json(preset);
    });
};

exports.delete_preset = function (req, res) {
    Preset.remove({
        "preset.tag": req.params.tag
    }, function (err, preset) {
        if (err)
            res.send(err);
        res.json({message: 'Preset successfully deleted'});
    });
};

exports.get_version = function (req, res) {
    Version.findOne({}, function (err, version) {
        if (err)
            res.send(err);
        res.json(version);
    });
};

exports.put_version = function (req, res) {
    Version.findOneAndUpdate({}, req.body, {new: true}, function (err, preset) {
        if (err)
            res.send(err);
        res.json(preset);
    });
};