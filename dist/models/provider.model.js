"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProviderSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true,
        trim: true,
    },
    dni_ruc: {
        type: String,
        required: [true, 'El DNI/RUC es obligatorio'],
        unique: true,
        trim: true,
    },
    direction: {
        type: String,
        required: [true, 'El monto es obligatorio'],
    },
    condition: {
        type: String,
        required: [true, 'La condición es obligatoria'],
    },
    state: {
        type: Boolean,
        required: [true, 'El estado es obligatorio'],
    },
    document_type: {
        type: String,
        required: [true, 'El tipo de documento es obligatorio'],
    },
}, {
    timestamps: true,
});
const Provider = mongoose_1.models.IProvider || (0, mongoose_1.model)('Provider', ProviderSchema);
exports.default = Provider;
