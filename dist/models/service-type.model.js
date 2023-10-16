"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const interfaces_1 = require("../interfaces");
const ServiceTypeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
        unique: true,
        uppercase: true,
    },
    description: {
        type: String,
        enum: interfaces_1.PaymentType,
        required: [true, 'La descripcion debe ser obligatoria'],
    },
    state: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
});
const ServiceType = mongoose_1.models.ServiceType || (0, mongoose_1.model)('ServiceType', ServiceTypeSchema);
exports.default = ServiceType;
