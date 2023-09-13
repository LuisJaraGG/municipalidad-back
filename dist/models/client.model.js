"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClientSchema = new mongoose_1.Schema({
    first_name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
    },
    last_name: {
        trim: true,
        type: String,
        required: [true, 'El apellido es obligatorio'],
    },
    phone: {
        type: String,
        required: [true, 'El teléfono es obligatorio'],
        trim: true,
    },
    direction: {
        type: String,
        trim: true,
    },
    dni: {
        type: String,
        required: [true, 'El DNI es obligatorio'],
        trim: true,
        unique: true,
    },
    type: {
        type: String,
        enum: {
            values: ['Jurídico', 'Natural'],
            message: '{VALUE} no es un tipo válido',
        },
        required: [true, 'El tipo es obligatorio'],
    },
}, {
    timestamps: true,
});
const Client = mongoose_1.models.User || (0, mongoose_1.model)('Client', ClientSchema);
exports.default = Client;
