"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        unique: true,
        uppercase: true,
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        default: 0,
    },
    state: {
        type: Boolean,
        default: true,
    },
    type: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'ServiceType',
    },
}, {
    timestamps: true,
});
const Service = mongoose_1.models.Service || (0, mongoose_1.model)('Service', ServiceSchema);
exports.default = Service;
