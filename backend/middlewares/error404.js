const createError = require('http-errors');

module.exports = function error404 (req, res, next) {
    next(createError(404));
};