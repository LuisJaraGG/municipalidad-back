"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceTypeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        unique: true,
    },
    description: {
        type: String,
        trim: true,
    },
    state: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
const ServiceType = mongoose_1.models.ServiceType || (0, mongoose_1.model)('ServiceType', ServiceTypeSchema);
exports.default = ServiceType;
