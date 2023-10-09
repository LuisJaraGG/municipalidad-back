"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClientSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
    },
    email: {
        trim: true,
        type: String,
        required: [true, 'El email es obligatorio'],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, 'El teléfono es obligatorio'],
        trim: true,
    },
    address: {
        required: [true, 'La dirección es obligatoria'],
        type: String,
        trim: true,
    },
    dni_ruc: {
        type: String,
        required: [true, 'El DNI es obligatorio'],
        trim: true,
        unique: true,
    },
    document_type: {
        type: String,
        enum: {
            values: ['DNI', 'RUC'],
            message: '{VALUE} no es un tipo de documento válido',
        },
        required: [true, 'El tipo de documento es obligatorio'],
    },
    state: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
const Client = mongoose_1.models.Client || (0, mongoose_1.model)('Client', ClientSchema);
exports.default = Client;
