const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname, '../') ,
    testEnvironment: 'jsdom' ,
    testMatch: ['<rootDir>/test/*.js']
}