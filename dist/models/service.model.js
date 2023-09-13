"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
    },
    state: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
const Service = mongoose_1.models.User || (0, mongoose_1.model)('Service', ServiceSchema);
exports.default = Service;
