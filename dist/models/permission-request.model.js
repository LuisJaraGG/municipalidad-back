"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PermissionRequestSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,
    },
    client: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Client',
        required: [true, 'El cliente es obligatorio'],
    },
    type: {
        type: String,
        enum: {
            values: ['Comercial', 'Construcción', 'Demolición', 'Evento'],
            message: '{VALUE} no es un tipo válido',
        },
        required: [true, 'El tipo es obligatorio'],
    },
    state: {
        type: String,
        enum: {
            values: ['Pendiente', 'Aprobado', 'Rechazado'],
            message: '{VALUE} no es un estado válido',
        },
        required: [true, 'El estado es obligatorio'],
    },
}, {
    timestamps: true,
});
const PermissionRequest = mongoose_1.models.User || (0, mongoose_1.model)('PermissionRequest', PermissionRequestSchema);
exports.default = PermissionRequest;
