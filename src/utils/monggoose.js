module.exports = {
    mutipleMonggooseToObj: function (monggooseArrs) {
        return monggooseArrs.map((monggooseArr) => monggooseArr.toObject());
    },
    monggooseToObj: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
