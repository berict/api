'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var presetSchema = new Schema({
    preset: {
        about: {
            songName: {
                type: String,
                required: true
            },
            songArtist: {
                type: String,
                required: true
            },
            presetArtist: {
                type: String,
                required: true
            },
            isTutorialAvailable: {
                type: Boolean,
                required: true,
                default: false
            },
            color: {
                type: String,
                required: true
            }
        },
        isGesture: {
            type: Boolean,
            required: true
        },
        soundCount: {
            type: Number,
            required: true
        },
        tag: {
            type: String,
            required: true
        },
        bpm: {
            type: Number,
            required: true
        }
    },
    genre: {
        type: String,
        required: true
    },
    description: String,
    difficulty: {
        type: Number,
        required: true
    },
    version: {
        type: Number,
        required: true,
        default: 1
    },
    reviews: [{
        rating: {
            type: Number,
            required: true
        },
        comment: String,
        date: {
            type: Date,
            required: true
        },
        version: {
            type: Number,
            required: true
        }
    }]
});

var versionSchema = new Schema({
    versionCode: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Presets', presetSchema);
module.exports = mongoose.model('VersionCode', versionSchema);