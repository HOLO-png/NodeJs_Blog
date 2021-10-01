const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

// const ObjectId = Schema.ObjectId;

const Colection = new Schema(
    {
        name: { type: String, minLength: 1, maxLength: 255, required: true },
        description: {
            type: String,
            minLength: 1,
            default: '',
            maxLength: 600,
        },

        thumnail: { type: String, minLength: 1, default: '', maxLength: 600 },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);

mongoose.plugin(slug);
Colection.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

// // a setter
// Colections.path('name').set(function (v) {
//     return capitalize(v);
// });

// // middleware
// Colections.pre('save', function (next) {
//     notify(this.get('email'));
//     next();
// });

module.exports = mongoose.model('Colection', Colection);
