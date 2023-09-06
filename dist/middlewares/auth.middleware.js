"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = exports.loginValidator = void 0;
const express_validator_1 = require("express-validator");
const field_middleware_1 = require("./field.middleware");
exports.loginValidator = [
    (0, express_validator_1.check)('email', 'El correo es requerido').trim().isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es requerida').trim().not().isEmpty().isLength({ min: 6 }),
    field_middleware_1.validateFields,
];
exports.registerValidator = [
    (0, express_validator_1.check)('name', 'El nombre es requerido').trim().not().isEmpty().isLength({ min: 3 }),
    (0, express_validator_1.check)('email', 'El correo es requerido').trim().isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es requerida').trim().not().isEmpty().isLength({ min: 6 }),
    field_middleware_1.validateFields,
];
