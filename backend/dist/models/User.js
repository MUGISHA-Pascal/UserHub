"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    FirstName: {
        type: String,
    },
    SecondName: {
        type: String,
    },
    Phone: {
        type: Number,
    },
    Email: {
        type: String,
    },
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;
