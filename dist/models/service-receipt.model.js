"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ServiceReceiptSchema = new mongoose_1.Schema({
    client: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Client',
        required: [true, 'El cliente es obligatorio'],
    },
    service: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'El servicio es obligatorio'],
    },
    amount: {
        type: Number,
        required: [true, 'El monto es obligatorio'],
    },
}, {
    timestamps: true,
});
const ServiceReceipt = mongoose_1.models.User || (0, mongoose_1.model)('ServiceReceipt', ServiceReceiptSchema);
exports.default = ServiceReceipt;
