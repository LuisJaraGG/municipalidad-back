"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        uppercase: true,
        required: [true, 'El nombre es obligatorio'],
    },
    state: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
const Role = mongoose_1.models.Role || (0, mongoose_1.model)('Role', RoleSchema);
exports.default = Role;
