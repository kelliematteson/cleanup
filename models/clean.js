const mongoose = require('mongoose');

const cleanSchema = new mongoose.Schema({
    location: { type: String, required: true },
    description: { type: String, required: true },
    needHelp: Boolean
});

const Clean = mongoose.model('Clean', cleanSchema);

module.exports = Clean;