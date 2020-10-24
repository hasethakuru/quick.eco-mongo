const { Schema, model } = require('mongoose');

module.exports = (name, collection) => {
    const Money = new Schema({
        user: {
            type: String,
            unique: true
        },

        balance: Number
    });

    return model(name, Money, collection);
}