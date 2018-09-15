const mongoose = require('mongoose');

const mongoUrl = 'mongodb://savio:senha123@ds149672.mlab.com:49672/books';

const connect = () => mongoose.connect(mongoUrl);

module.exports = {connect};