const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: 'string',
  slug: 'string',
}, { timestamps: true });
const Shelf = mongoose.model('Shelf', schema);

module.exports = Shelf;
