const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hoang_long_dev' );
        console.log('ok connect');
    } catch (error) {
        console.log('ko connect');
    }
}

module.exports = { connect };
