'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Schema preset
{
    "presets":[
        {
            "description":"desc",
            "difficulty":1,
            "genre":"genre",
            "preset":{
                "about":{
                    "color":"#00D3BE",
                    "isTutorialAvailable":false,
                    "presetArtist":"Studio Berict",
                    "songArtist":"Alan Walker",
                    "songName":"Faded"
                },
                "bpm":90,
                "isGesture":true,
                "soundCount":245,
                "tag":"alan_walker_faded_gesture"
            },
            "reviews":[
                {
                    "comment":"comment",
                    "date":1503591131972,
                    "rating":3,
                    "version":1
                }
            ],
            "version":1
        }
    ],
    "versionCode":21
}
*/

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

// Example schema from https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
// var TaskSchema = new Schema({
//     name: {
//         type: String,
//         required: 'Kindly enter the name of the task'
//     },
//     Created_date: {
//         type: Date,
//         default: Date.now
//     },
//     status: {
//         type: [{
//             type: String,
//             enum: ['pending', 'ongoing', 'completed']
//         }],
//         default: ['pending']
//     }
// });

module.exports = mongoose.model('Presets', presetSchema);